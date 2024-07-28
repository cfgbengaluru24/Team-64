import pandas as pd
import numpy as np
import matplotlib as plt
from ydata_profiling import ProfileReport
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error, r2_score
import json
from sklearn.preprocessing import StandardScaler

class DropoutProbabilityPredictor:
    def __init__(self, csv_path):
        self.csv_path = csv_path
        self.df = pd.read_csv(csv_path)
        self.model = None
        self.scaler = None
        self._prepare_data()
        self._train_model()

    def _prepare_data(self):
        # Define dropout probability on a scale of 0 to 10 based on the given priorities
        def calculate_dropout_probability(row):
            absent_days_weight = 0.5
            behaviour_weight = 0.3
            marks_weight = 0.2

            absent_days_norm = row['AbsentDays'] / 5  # Normalized to 0-1
            behaviour_norm = row['Behaviour'] / 100
            marks_norm = row['Marks'] / 100

            dropout_prob = (absent_days_weight * absent_days_norm +
                            behaviour_weight * (1 - behaviour_norm) +
                            marks_weight * (1 - marks_norm))

            return np.clip(dropout_prob, 0, 10)

        self.df['DropoutProbability'] = self.df.apply(calculate_dropout_probability, axis=1)

        # Features and target variable
        self.X = self.df[['AbsentDays', 'Behaviour', 'Marks']]
        self.y = self.df['DropoutProbability']

        # Split the data into training and test sets
        X_train, X_test, y_train, y_test = train_test_split(self.X, self.y, test_size=0.3, random_state=42)

        # Standardize the features
        self.scaler = StandardScaler()
        X_train = self.scaler.fit_transform(X_train)
        X_test = self.scaler.transform(X_test)

        # Assign split data for model training
        self.X_train = X_train
        self.X_test = X_test
        self.y_train = y_train
        self.y_test = y_test

    def _train_model(self):
        # Create and train the regression model
        self.model = LinearRegression()
        self.model.fit(self.X_train, self.y_train)

        # Make predictions and evaluate the model
        y_pred = self.model.predict(self.X_test)
        mse = mean_squared_error(self.y_test, y_pred)
        r2 = r2_score(self.y_test, y_pred)

        # # Print evaluation metrics
        # print(f"Mean Squared Error: {mse}")
        # print(f"R-squared: {r2}")

        # # Print coefficients
        # print("Coefficients:")
        # print(f"AbsentDays: {self.model.coef_[0]}")
        # print(f"Behaviour: {self.model.coef_[1]}")
        # print(f"Marks: {self.model.coef_[2]}")

    def predict_dropout_probability(self, marks, behaviour, absent_days):
        # Create a DataFrame for the input
        input_df = pd.DataFrame({
            'AbsentDays': [absent_days],
            'Behaviour': [behaviour],
            'Marks': [marks]
        })
        
        # Standardize the input features
        input_df_scaled = self.scaler.transform(input_df)
        
        # Predict dropout probability (scale 0 to 10)
        dropout_prob = self.model.predict(input_df_scaled)[0]
        
        # Ensure dropout probability is within the scale of 0 to 10
        dropout_prob = np.clip(dropout_prob, 0, 10)
        
        # Normalize dropout probability to scale 0 to 100
        dropout_prob_normalized = dropout_prob * 10
        
        return dropout_prob_normalized

    def display_high_risk_students(self):
        # List to store student info and predicted dropout probability
        # Train the model
        self._train_model()
        high_risk_students = []
        for index, row in self.df.iterrows():
            # Predict dropout probability
            predicted_dropout_probability = self.predict_dropout_probability(
                row['Marks'],
                row['Behaviour'],
                row['AbsentDays']
            )

            if predicted_dropout_probability > 60:  # Filter students with high dropout probability
                student_info = {
                    'AbsentDays': row['AbsentDays'],
                    'Behaviour': row['Behaviour'],
                    'Marks': row['Marks'],
                    'RiskPercentage': predicted_dropout_probability  # Adding risk percentage
                }
                high_risk_students.append((index + 1, student_info))

        # Sort the list by predicted dropout probability in descending order
        high_risk_students.sort(key=lambda x: x[1]['RiskPercentage'], reverse=True)

        # Create a dictionary with serial numbers as keys
        high_risk_students_dict = {serial: student for serial, student in high_risk_students}

        # Remove the 'PredictedDropoutProbability' key from the student info dictionaries
        for student in high_risk_students_dict.values():
            student.pop('PredictedDropoutProbability', None)  # Remove if exists

        # Convert to JSON and save to a file
        with open('high_risk_students.json', 'w') as json_file:
            json.dump(high_risk_students_dict, json_file, indent=4)

        return high_risk_students_dict
    def update_student_info(self, student_index, was_present, current_behaviour, current_marks=None):
        row = self.df.loc[student_index]
        
        # Update absent days
        if not was_present:
            self.df.at[student_index, 'AbsentDays'] = (row['AbsentDays'] + 1) / 21 * 20
        
        # Update behaviour
        new_behaviour = (row['Behaviour'] * 1.5 + current_behaviour * 0.5) / 2
        self.df.at[student_index, 'Behaviour'] = new_behaviour
        
        # Update marks if a test was taken
        if current_marks is not None:
            new_marks = (row['Marks'] * 1.5 + current_marks * 0.5) / 2
            self.df.at[student_index, 'Marks'] = new_marks
            
    def display_student_prediction(self, student_index):
        if student_index < 0 or student_index >= len(self.df):
            print("Invalid student index.")
            return
        
        row = self.df.loc[student_index]
        predicted_dropout_probability = self.predict_dropout_probability(
            row['Marks'],
            row['Behaviour'],
            row['AbsentDays']
        )
        
        print(f"Student {student_index + 1}:")
        print(f"AbsentDays: {row['AbsentDays']}")
        print(f"Behaviour: {row['Behaviour']}")
        print(f"Marks: {row['Marks']}")
        print(f"Predicted Dropout Probability: {predicted_dropout_probability:.2f}")