# Chapter 09 — Day 1 Resource Teardown

**Day 1 | 02:15 PM – 02:25 PM | 10 minutes**

---

## 🎯 What This Session Is About

Safely delete all cloud resources created today. This is a professional skill — not an optional step.

---

## 💸 Why Teardown Matters

AWS charges for resources that are **running or stored**, even when you are not actively using them. A single forgotten EC2 instance can accumulate charges overnight.

> Teardown is not the end of the work. It is part of the work.

---

## 🧹 Teardown Checklist

Work through each item with the facilitator:

---

### 1. Terminate EC2 Instance

```
AWS Console → EC2 → Instances
→ Select your instance (my-first-instance)
→ Instance state → Terminate instance
→ Confirm termination
```

- [ ] ✅ EC2 instance terminated
- [ ] ✅ Instance state shows: Terminated

---

### 2. Delete S3 Bucket

```
AWS Console → S3
→ Click your bucket name
→ Select all objects → Delete → Type "permanently delete" → Confirm
→ Go back to S3 dashboard
→ Select your bucket → Delete bucket → Type bucket name → Confirm
```

- [ ] ✅ All S3 objects deleted
- [ ] ✅ S3 bucket deleted

---

### 3. Delete IAM User (Optional)

Keep the IAM user if you want to use it on Day 2. Otherwise:

```
AWS Console → IAM → Users
→ Select: workshop-student
→ Delete → Type username → Confirm
```

- [ ] ✅ IAM user deleted (or kept for Day 2)

---

### 4. Final Billing Check

```
AWS Console → Search: Billing → Bills
→ Check current month charges
→ Check "Free Tier Usage" to see remaining allocation
```

- [ ] ✅ No unexpected charges visible

---

## ✏️ What I Learned About Teardown Today

```
One thing that surprised me about resource cleanup:

→ _______________________________________________
  _______________________________________________
```

---

## ✅ Chapter Checklist

- [ ] EC2 instance terminated
- [ ] S3 bucket and objects deleted
- [ ] IAM user deleted or retained intentionally
- [ ] Billing dashboard checked

---

## 🏆 Badge Unlocked

> **RESPONSIBLE BUILDER 🧹** — A good cloud engineer always cleans up after themselves.

---

## 🎉 Day 1 Complete!

### My Day 1 Badge Collection

| Badge | Earned? |
|---|---|
| ☁️ Cloud Newcomer | ☐ |
| 🤝 Connected Builder | ☐ |
| 📜 Cloud Historian | ☐ |
| 📚 Lifelong Learner | ☐ |
| 🔐 IAM Guardian | ☐ |
| 🪣 Static Architect | ☐ |
| 💻 Cloud Engineer | ☐ |
| 🤖 AI Explorer | ☐ |
| 🧹 Responsible Builder | ☐ |

**Badges earned today: ___ / 9**

---

### ✏️ My Top 3 Learnings from Day 1

```
1. _______________________________________________
2. _______________________________________________
3. _______________________________________________
```

---

### One question I still have:

```
→ _______________________________________________
  _______________________________________________
```

---

> ✅ **Day 1 is done. Rest up.**
> See you tomorrow for Day 2 — it goes deeper.
>
> 👉 [Chapter 10 — Day 2 Settle-In & Recap](10-recap-day2.md)
