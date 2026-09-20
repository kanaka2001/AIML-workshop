# Chapter 12 — Hands-On Lab: MLOps Pipeline with SageMaker Canvas

**Day 2 | 10:30 AM – 11:55 AM | 85 minutes**

---

## 🎯 What You Will Do

Build a complete end-to-end machine learning pipeline — from raw data to live predictions — using Amazon SageMaker Canvas. No code required.

---

## 📋 Before You Start

- [ ] I have the customer churn CSV file on my laptop (shared by facilitator)
- [ ] I am signed in to the AWS Console

---

## 🗺️ Your Pipeline at a Glance

```
Step 1  Open SageMaker Canvas
Step 2  Import the dataset
Step 3  Create a new model
Step 4  Set the prediction target (Churn column)
Step 5  Train with Quick Build
Step 6  Analyze accuracy and feature importance
Step 7  Make predictions
```

---

## 👣 Step-by-Step

### Step 1 — Open SageMaker Canvas

```
AWS Console → Search: SageMaker → Click Amazon SageMaker
Left sidebar → Applications and IDEs → Canvas
→ Click "Open Canvas"
```

> ⏳ First-time setup may take 1–2 minutes. This is normal — Canvas is provisioning your workspace.

- [ ] ✅ Canvas workspace is open

---

### Step 2 — Import the Dataset

```
Left sidebar → Datasets → Click "Import data"
→ Select "Upload"
→ Choose the customer churn CSV file from your laptop
→ Click "Create dataset"
```

The CSV contains columns like:
- `State`, `Account_Length`, `Monthly_Charges`
- `Cust_Service_Calls`, `International_Plan`
- `Churn` — this is the column you want to predict

- [ ] ✅ Dataset imported successfully

---

### Step 3 — Create a New Model

```
Left sidebar → Models → Click "New model"

Model name → Enter: Customer-Churn-Predictor

Select your uploaded dataset → Click "Select dataset"
```

- [ ] ✅ Model created and dataset attached

---

### Step 4 — Set the Prediction Target

```
In the Build tab:
Target column → Select: Churn
```

Canvas automatically detects the problem type:
**Two-category prediction (Binary Classification)** ✅

This means: Canvas will learn to predict either `True` (will churn) or `False` (will not churn).

- [ ] ✅ Target column set to Churn

---

### Step 5 — Train the Model

```
Click "Validate data"
→ Wait for validation — Canvas checks for missing values and formatting errors

→ Click "Quick build"
```

> Quick Build trains a functional model in under 10 minutes using AutoML.
> While it trains, read the section below on how AutoML works.

Training started at: `_______________`
Training finished at: `_______________`

- [ ] ✅ Quick Build is running

---

## 📖 While You Wait — How AutoML Works

When you click Quick Build, Canvas automatically:

1. **Cleans the data** — handles missing values and formats columns
2. **Engineers features** — creates new useful variables from existing ones
3. **Tries multiple algorithms** — tests several ML approaches
4. **Tunes each algorithm** — adjusts settings to improve accuracy
5. **Picks the winner** — returns the best performing model

This is what data scientists used to spend weeks doing manually.

---

### Step 6 — Analyze the Results

Once training completes, the **Analyze** tab opens automatically.

**Model accuracy:**
```
My model accuracy: ___________%

(Example: 94.2% means the model correctly predicted
whether a customer would churn 94.2% of the time
on data it had never seen before)
```

**Column Impact (Feature Importance) Chart:**

This shows which columns in the dataset influenced the model's predictions the most.

```
Top 3 features that predict churn in my model:

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
```

- [ ] ✅ Accuracy noted
- [ ] ✅ Top features identified

---

### Step 7 — Make Predictions

```
Click "Predict" (bottom right of the Analyze tab)
```

**Option A — Single Prediction:**

```
Select "Single prediction"
→ Adjust the column sliders manually
→ Watch the churn probability change in real time
```

Try this: Set `Cust_Service_Calls` to the maximum value. What happens to the churn prediction?

```
My observation:
→ _______________________________________________
```

**Option B — Batch Prediction:**

```
Select "Batch prediction"
→ Upload a new CSV of customer records
→ Canvas generates a churn probability for every customer at once
```

- [ ] ✅ I made at least one single prediction
- [ ] ✅ I observed which features affect the prediction

---

## 🗺️ What You Just Built

```
Customer CSV Data
      ↓
  Import & Validate (Canvas)
      ↓
  Automated Feature Engineering
      ↓
  AutoML Model Training
      ↓
  Accuracy + Feature Importance Analysis
      ↓
  Live Single & Batch Predictions
      ↓
  ✅ Complete End-to-End MLOps Pipeline
```

---

## 🧠 Reflection

```
Model accuracy of 94% sounds great. But what happens
to the 6% of predictions that are wrong? In a business
context, which type of error is worse — predicting a
customer will stay when they actually leave, or predicting
they will leave when they actually stay?

→ _______________________________________________
  _______________________________________________

Name one industry other than telecom where churn
prediction would be valuable:

→ _______________________________________________
```

---

## 🧹 Clean-Up (Do this at teardown)

```
Canvas → Bottom-left Account icon → Sign out
AWS Console → SageMaker → Domains
→ Verify Canvas app status shows: Stopped
```

---

## ✅ Chapter Checklist

- [ ] Dataset imported into Canvas
- [ ] Model created and target column set to Churn
- [ ] Quick Build training completed
- [ ] Accuracy and feature importance reviewed
- [ ] At least one single prediction made

---

## 🏆 Badge Unlocked

> **MLOPS ENGINEER 🔬** — You built and deployed a machine learning model. Without writing a line of code.

---

> ✅ **Done? Move to the next chapter:**
> 👉 [Chapter 13 — PartyRock AI Builder](13-partyrock.md)
