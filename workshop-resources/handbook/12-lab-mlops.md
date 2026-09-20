# Chapter 12 — Hands-On Lab: MLOps Pipeline with SageMaker Canvas

**Day 2 | 10:30 AM – 11:55 AM | 85 minutes**

---

## 🎯 What You Will Do

Build a complete end-to-end machine learning pipeline — from raw data to live predictions — using Amazon SageMaker Canvas. No code required.

---

<p align="center">
  <img src="https://icon.icepanel.io/AWS/svg/Machine-Learning/SageMaker.svg" width="80" alt="SageMaker"/>
</p>

---

## 📋 Before You Start

- [ ] Customer churn CSV file is on my laptop
- [ ] Signed in to the AWS Console

---

## 👣 Step-by-Step

### Step 1 — Open SageMaker Canvas

```
AWS Console → Search: SageMaker → Click Amazon SageMaker
Left sidebar → Applications and IDEs → Canvas
→ Click "Open Canvas"
```

> ⏳ First-time setup takes 1–2 minutes. Canvas is provisioning your workspace.

---

### Step 2 — Import the Dataset

```
Left sidebar → Datasets → Click "Import data"
→ Select "Upload"
→ Choose the customer churn CSV from your laptop
→ Click "Create dataset"
```

The CSV has columns like `State`, `Account_Length`, `Monthly_Charges`, `Cust_Service_Calls`, and `Churn`.

---

### Step 3 — Create a New Model

```
Left sidebar → Models → Click "New model"
Model name   →  Customer-Churn-Predictor
Select your uploaded dataset → Click "Select dataset"
```

---

### Step 4 — Set the Prediction Target

```
Build tab → Target column → Select: Churn
```

Canvas detects: **Two-category prediction (Binary Classification)** ✅

---

### Step 5 — Train the Model

```
→ Click "Validate data"    (checks for errors first)
→ Click "Quick build"
```

> Quick Build trains a working model in under 10 minutes using AutoML.
> While it trains, read the AutoML section below.

---

## 📖 What Happens During Quick Build

When you click Quick Build, Canvas automatically:

<p align="center">

```
Cleans the data
       ↓
Engineers new features
       ↓
Tries multiple ML algorithms
       ↓
Tunes each algorithm automatically
       ↓
Picks the best-performing model
       ↓
Returns accuracy metrics and feature importance
```

</p>

This is what data scientists used to spend weeks doing by hand.

---

### Step 6 — Analyze the Results

Once training completes, the **Analyze** tab opens automatically.

**Review these two things:**

**1. Model accuracy** — e.g., `94.2%` means the model correctly predicted churn on test data 94.2% of the time.

**2. Column Impact chart** — shows which columns influenced the predictions most. High-impact features often include `Cust_Service_Calls` and `Monthly_Charges`.

---

### Step 7 — Make Predictions

```
Click "Predict" (bottom right)
```

**Option A — Single Prediction:**
```
Select "Single prediction"
→ Adjust column sliders manually
→ Watch the churn probability update in real time
```

Try setting `Cust_Service_Calls` to maximum. Does the churn probability go up?

**Option B — Batch Prediction:**
```
Select "Batch prediction"
→ Upload a new CSV of customer records
→ Canvas scores every customer at once
```

---

## 🌐 Share Your ML Model!

> 🔬 You just built a machine learning model from scratch — without writing a single line of code.
> Share it with the community:
> **[@awssbg_dbit](https://www.instagram.com/awssbg_dbit/)**
> **#AWSBuildersLab #MLOps #SageMaker #HexaVerse26**

Stay updated on upcoming ML events:

<p align="center">

| | |
|:---:|:---:|
| 📢 [WhatsApp Channel](https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X) | Resources and upcoming event announcements |
| 💼 [LinkedIn](https://www.linkedin.com/company/aws-sbg-dbit/) | Professional ML and cloud community |

</p>

---

## ✅ Chapter Checklist

- [ ] Dataset imported into Canvas
- [ ] Model created with Churn as the target column
- [ ] Quick Build training completed
- [ ] Accuracy and feature importance reviewed
- [ ] At least one single prediction made

---

## 🏆 Badge Unlocked

> ### 🔬 MLOPS ENGINEER
> You built and deployed a machine learning model. Without writing a line of code.

---

> ✅ **Done? Move to the next chapter:**
> ### 👉 [Chapter 13 — PartyRock AI Builder](13-partyrock.md)
