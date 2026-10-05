# Chapter 11 — Amazon SageMaker Canvas Introduction

**Day 2 | 10:20 AM – 10:30 AM | 10 minutes**

---

## 🎯 What This Session Is About

Understand what SageMaker Canvas is, why it matters for AIML students, and exactly what you are about to build.

---

## 🧠 What is Amazon SageMaker Canvas?

<p align="center">
  <img src="https://raw.githubusercontent.com/sashee/aws-svg-icons/master/docs/Architecture-Service-Icons_07302021/Arch_Machine-Learning/64/Arch_Amazon-SageMaker_64.svg" width="80" alt="SageMaker"/>
  <br/>
  <b>Amazon SageMaker Canvas</b>
</p>

**SageMaker Canvas** is a no-code machine learning tool. It lets you build, train, and deploy ML models through a visual interface — without writing a single line of code.

<p align="center">

```
TRADITIONAL ML                    SAGEMAKER CANVAS
──────────────────────────        ──────────────────────────────
Write Python for data prep        Automatic data preparation
Choose algorithms manually        AutoML selects best algorithm
Tune hyperparameters by hand      Automatic tuning
Deploy with infra setup           One-click prediction

RESULT: Weeks of work             RESULT: Under 10 minutes
```

</p>

---

## 📊 Types of Problems Canvas Can Solve

| Problem Type | What It Predicts | Example |
|---|---|---|
| **Binary Classification** | Yes or No | Will this student get placed? |
| **Multi-class Classification** | One of many categories | Which department handles this ticket? |
| **Regression** | A number | What will this house sell for? |
| **Time-series Forecasting** | Future values | What will sales be next month? |

---

## 🎯 What You Are Building Today

**Student Placement Predictor**

A college placement cell wants to know: *which students are most likely to get placed based on their academic performance and skills?*

Your dataset: **`student_placement.csv`** — shared in the WhatsApp channel before the session.

Your pipeline:

<p align="center">

```
Import student_placement.csv
       ↓
Select prediction target (Placed column)
       ↓
Canvas trains ML model automatically (AutoML)
       ↓
Review accuracy & which factors drive placement
       ↓
Make live predictions for individual student profiles
       ↓
Deploy as a live REST API endpoint
```

</p>

---

## 📋 Dataset — What's Inside

| Column | What It Represents |
|---|---|
| CGPA / GPA | Academic performance |
| Internships | Number of internships completed |
| Projects | Number of projects done |
| Skills | Technical skills count |
| Placed | **Target column** — Yes (placed) or No (not placed) |

> The model learns from historical data and predicts whether a new student profile is likely to result in placement.

---

## 🌐 Get the Dataset Before the Lab

> 📢 The `student_placement.csv` file will be shared in the WhatsApp channel before this session.
> Make sure it is downloaded on your laptop before Chapter 12 begins.
> **[Join WhatsApp Channel](https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X)**

---

## ✅ Chapter Checklist

- [ ] I understand what SageMaker Canvas does
- [ ] I understand what Binary Classification means
- [ ] I have `student_placement.csv` downloaded from the WhatsApp channel
- [ ] I understand what the `Placed` column represents (target to predict)

---

## 🏆 Badge Unlocked

> ### 🧠 ML INITIATE
> You understand what you are about to build. That is half the battle.

---

> ✅ **Done? The main lab starts now:**
> ### 👉 [Chapter 12 — Hands-On Lab: MLOps Pipeline](12-lab-mlops.md)
