# Chapter 11 — Amazon SageMaker Canvas Introduction

**Day 2 | 10:20 AM – 10:30 AM | 10 minutes**

---

## 🎯 What This Session Is About

Understand what SageMaker Canvas is, why it matters for AIML students, and exactly what you are about to build.

---

## 🧠 What is Amazon SageMaker Canvas?

<p align="center">
  <img src="https://icon.icepanel.io/AWS/svg/Machine-Learning/SageMaker.svg" width="80" alt="SageMaker"/>
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
| **Binary Classification** | Yes or No | Will this customer leave? |
| **Multi-class Classification** | One of many categories | Which department handles this ticket? |
| **Regression** | A number | What will this house sell for? |
| **Time-series Forecasting** | Future values | What will sales be next month? |

---

## 🎯 What You Are Building Today

**Customer Churn Predictor**

A telecom company wants to know: *which customers are most likely to cancel their subscription next month?*

Your pipeline:

<p align="center">

```
Import CSV dataset
       ↓
Select prediction target (Churn column)
       ↓
Canvas trains ML model automatically (AutoML)
       ↓
Review accuracy & which factors drive churn
       ↓
Make live predictions for individual customers
```

</p>

---

## 🌐 Follow the MLOps Journey Live

> 📢 Resources for today's lab are in the WhatsApp channel — make sure you have the CSV file downloaded.
> **[Join WhatsApp Channel](https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X)**

---

## ✅ Chapter Checklist

- [ ] I understand what SageMaker Canvas does
- [ ] I understand what Binary Classification means
- [ ] I have the customer churn CSV file from the facilitator
- [ ] I understand what the `Churn` column represents

---

## 🏆 Badge Unlocked

> ### 🧠 ML INITIATE
> You understand what you are about to build. That is half the battle.

---

> ✅ **Done? The main lab starts now:**
> ### 👉 [Chapter 12 — Hands-On Lab: MLOps Pipeline](12-lab-mlops.md)
