# Chapter 07 — Hands-On Lab: Amazon EC2 Virtual Machine

**Day 1 | 01:00 PM – 01:15 PM | Part of the 55-min Core Lab**

---

## 🎯 What You Will Do

Launch a virtual computer (EC2 instance) in the AWS cloud, connect to it, and then safely terminate it.

---

## 💻 What is Amazon EC2?

**EC2 (Elastic Compute Cloud)** gives you virtual machines in the cloud. You can launch one in under a minute, choose any operating system, pick any hardware configuration, and pay only while it runs.

| Your Laptop | EC2 Instance |
|---|---|
| Fixed hardware specs | Choose CPU, RAM, storage on demand |
| One operating system | Any OS: Ubuntu, Windows, Amazon Linux |
| Always on your desk | Runs in AWS data centers globally |
| Always consuming power | Pay only when running |

---

## 📋 Before You Start

- [ ] I am signed in to the AWS Console
- [ ] I know which AWS Region I am using: `_______________`

---

## 👣 Step-by-Step

### Step 1 — Navigate to EC2

```
AWS Console → Search: EC2 → Click EC2
→ Click "Launch instance" (orange button)
```

- [ ] ✅ On the Launch instance page

---

### Step 2 — Name Your Instance

```
Name:  my-first-instance
```

- [ ] ✅ Instance named

---

### Step 3 — Choose an Operating System

```
Application and OS Images (AMI):
→ Select: Ubuntu Server 22.04 LTS (HVM), SSD Volume Type
→ Architecture: 64-bit (x86)
```

- [ ] ✅ Ubuntu 22.04 selected

---

### Step 4 — Choose Instance Type

```
Instance type → Select: t2.micro
```

> ✅ t2.micro is **Free Tier eligible** — no charges for the first 750 hours per month.

- [ ] ✅ t2.micro selected

---

### Step 5 — Create a Key Pair

A key pair is like a password file that lets you securely connect to your instance.

```
Key pair → Click "Create new key pair"

Key pair name   →  my-workshop-key
Key pair type   →  RSA
File format     →  .pem

→ Click "Create key pair"
```

The `.pem` file downloads automatically to your computer.

> ⚠️ Save this file somewhere safe. You cannot download it again once this window closes.

My key file is saved at: `_______________________`

- [ ] ✅ Key pair downloaded and saved safely

---

### Step 6 — Configure Network Settings

```
✅ Allow SSH traffic from  →  My IP
✅ Allow HTTP traffic from the internet
```

- [ ] ✅ Security settings configured

---

### Step 7 — Launch the Instance

```
Storage: Leave default (8 GiB gp3)
→ Click "Launch instance"
→ Click "View all instances"
```

Wait until **Instance state** changes to: **Running ✅**

My instance Public IP address: `___________________`

- [ ] ✅ Instance is running

---

### Step 8 — (Optional) Connect via SSH

If you want to go inside your virtual machine, open your terminal:

```bash
chmod 400 my-workshop-key.pem
ssh -i my-workshop-key.pem ubuntu@YOUR-PUBLIC-IP
```

You are now inside a computer running in an AWS data center.

```bash
# Try running these commands inside your EC2 instance:
whoami
uname -a
ls
```

- [ ] ✅ Connected to my EC2 instance via SSH

---

## 🧠 Reflection

```
What is one thing you could run on EC2 that you
could not host on S3?

→ _______________________________________________

If 10,000 students visit your EC2-hosted website
at the same time, what AWS feature would help handle
that traffic?

→ _______________________________________________
```

---

## 🧹 Clean-Up — IMPORTANT ⚠️

EC2 instances **charge by the hour**. Always terminate when you are done.

```
EC2 → Instances → Select your instance
→ Instance state → Terminate instance → Confirm
```

> Stopping = pauses but still charges for storage.
> Terminating = permanently deleted, all charges stop.

- [ ] ✅ Instance terminated

---

## ✅ Chapter Checklist

- [ ] EC2 instance launched with Ubuntu 22.04
- [ ] t2.micro (Free Tier) selected
- [ ] Key pair downloaded and saved
- [ ] Instance reached Running state
- [ ] Instance terminated after the lab

---

## 🏆 Badge Unlocked

> **CLOUD ENGINEER 💻** — You launched a virtual machine in the cloud. That is a real skill.

---

> ✅ **Done? Head to lunch:**
> 🍽️ **Lunch Break — 01:15 PM to 01:45 PM**
>
> Then come back for:
> 👉 [Chapter 08 — AWS Bedrock Overview](08-bedrock.md)
