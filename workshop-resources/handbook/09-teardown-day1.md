# Chapter 09 — Day 1 Resource Teardown

**Day 1 | 02:15 PM – 02:25 PM | 10 minutes**

---

## 🎯 What This Session Is About

Safely delete all cloud resources created today. This is a professional discipline — not optional.

> 💸 AWS charges for resources that are running or stored even when you are not using them. A forgotten EC2 instance can rack up charges overnight.

---

## 🧹 Teardown Checklist

### 1. Terminate EC2 Instance

```
EC2 → Instances → Select: my-first-instance
→ Instance state → Terminate instance → Confirm
```

- [ ] ✅ EC2 instance terminated — status shows Terminated

---

### 2. Delete S3 Bucket

```
S3 → Click your bucket name
→ Select all objects → Delete → Type "permanently delete" → Confirm
→ Back to S3 dashboard → Select bucket
→ Delete bucket → Type bucket name → Confirm
```

- [ ] ✅ All S3 objects deleted
- [ ] ✅ S3 bucket deleted

---

### 3. Delete IAM User (Optional)

Keep the IAM user if you plan to use it on Day 2. Otherwise:

```
IAM → Users → Select: workshop-student
→ Delete → Type username → Confirm
```

- [ ] ✅ IAM user deleted (or kept intentionally for Day 2)

---

### 4. Final Billing Check

```
AWS Console → Search: Billing → Bills
→ Review current month charges
→ Check "Free Tier Usage" to see remaining allocations
```

- [ ] ✅ No unexpected charges visible

---

## 🎉 Day 1 — Complete!

### Badges You Earned Today

| Badge | |
|---|---|
| ☁️ Cloud Newcomer | Took your first step into the cloud |
| 🤝 Connected Builder | Joined the community and made connections |
| 📜 Cloud Historian | Understood the origins of cloud computing |
| 📚 Lifelong Learner | Discovered where to keep learning |
| 🔐 IAM Guardian | Created secure cloud access |
| 🪣 Static Architect | Hosted a real website on S3 |
| 💻 Cloud Engineer | Launched a virtual machine on EC2 |
| 🤖 AI Explorer | Tried Generative AI on Bedrock |
| 🧹 Responsible Builder | Cleaned up all resources |

---

## 🌐 End of Day — Stay Connected

> 📸 Share your Day 1 experience:
> **[@awssbg_dbit](https://www.instagram.com/awssbg_dbit/)** on Instagram
> **#AWSBuildersLab #Day1Done #HexaVerse26**

Don't miss Day 2 updates — make sure you are in the WhatsApp channel:

<p align="center">

| | |
|:---:|:---:|
| 📢 [WhatsApp Channel](https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X) | Day 2 resources will be shared here |
| 🤝 [Meetup Community](https://www.meetup.com/aws-sbg-at-don-bosco-institute-of-technology-bangalore/) | RSVP for future events |

</p>

---

> ✅ **Day 1 is done. Rest up.**
> Day 2 goes deeper into ML and Generative AI.
>
> ### 👉 [Chapter 10 — Day 2 Settle-In & Recap](10-recap-day2.md)
