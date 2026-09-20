# Chapter 11 — Amazon SageMaker Canvas Introduction

**Day 2 | 10:20 AM – 10:30 AM | 10 minutes**

---

## 🎯 What This Session Is About

Understand what SageMaker Canvas is, why it matters for AIML students, and what you are going to build in the next lab.

---

## 🧠 What is Amazon SageMaker Canvas?

**Amazon SageMaker Canvas** is a no-code machine learning tool. It lets you build, train, and deploy ML models through a visual interface — without writing a single line of code.

| Traditional ML Workflow | With SageMaker Canvas |
|---|---|
| Write Python code for data prep | Automatic data preparation |
| Choose algorithms manually | AutoML selects the best algorithm |
| Tune hyperparameters | Automatic tuning |
| Evaluate models with code | Visual accuracy and feature charts |
| Deploy with infrastructure setup | One-click prediction |

---

## 📊 Types of Problems Canvas Can Solve

| Problem Type | What It Predicts | Example |
|---|---|---|
| **Binary Classification** | One of two outcomes (Yes/No) | Will this customer churn? |
| **Multi-class Classification** | One of many categories | Which department handles this ticket? |
| **Regression** | A number | What price will this house sell for? |
| **Time-series Forecasting** | Future values over time | What will sales be next month? |

---

## 🎯 What You Will Build in the Next Lab

**Customer Churn Predictor**

A telecom company wants to know: *which customers are likely to cancel their subscription?*

You will:
1. Import a dataset of real customer usage records
2. Tell Canvas which column to predict (the `Churn` column)
3. Let Canvas automatically train an ML model
4. Review accuracy and which factors drive churn
5. Make live predictions for individual customers

---

## 🧠 What is MLOps?

**MLOps (Machine Learning Operations)** is the practice of building, deploying, and maintaining ML models reliably in production — the same way DevOps does for software.

The pipeline you will build today:

```
Raw Data → Import → Validate → Train → Evaluate → Predict
```

This is a complete end-to-end MLOps pipeline.

---

## ✏️ My Notes

```
_______________________________________________
_______________________________________________
_______________________________________________
```

---

## ✅ Chapter Checklist

- [ ] I understand what SageMaker Canvas does
- [ ] I understand what Binary Classification means
- [ ] I understand what customer churn is and why predicting it matters
- [ ] I have the dataset CSV file ready (shared by the facilitator)

---

## 🏆 Badge Unlocked

> **ML INITIATE 🧠** — You understand what you are about to build. That is half the battle.

---

> ✅ **Done? Move to the next chapter:**
> 👉 [Chapter 12 — Hands-On Lab: MLOps Pipeline](12-lab-mlops.md)
