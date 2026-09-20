# Chapter 05 — Hands-On Lab: AWS IAM User Setup

**Day 1 | 12:20 PM – 12:40 PM | Part of the 55-min Core Lab**

---

## 🎯 What You Will Do

Create a new IAM user with AWS Console access — the right and secure way to work on AWS.

---

## 🔐 What is AWS IAM?

**IAM (Identity and Access Management)** controls two things:

- **Authentication** — Who can log into your AWS account
- **Authorization** — What they are allowed to create, view, or delete

Think of it as a digital keycard system for your cloud environment.

---

## ❓ Why Not Just Use the Root Account?

Your Root account (created when you signed up) has **unlimited power** over everything — including billing and account deletion. Using it for daily work is dangerous.

| Root Account | IAM User |
|---|---|
| Created when you sign up | Created by you for specific people |
| Has access to everything including billing | Has only the permissions you grant |
| Cannot be restricted | Fully configurable |
| Never share this | Share only what is needed |

> **Golden Rule:** Create an IAM user for all hands-on work. Never use Root for daily tasks.

---

## 📋 Before You Start

- [ ] I am signed in to the AWS Console as Root or Admin
- [ ] I have a username ready: `workshop-student` (or your choice)
- [ ] I have a temporary password ready

---

## 👣 Step-by-Step

### Step 1 — Open IAM

```
AWS Console → Search bar → Type: IAM → Click IAM
                           (Manage access to AWS resources)
```

- [ ] ✅ I can see the IAM Dashboard

---

### Step 2 — Start Creating a User

```
Left sidebar → Users → Click "Create user" (orange button)
```

- [ ] ✅ I am on the Create user page

---

### Step 3 — Enter User Details

```
User name field → Enter: workshop-student

Check ✅: "Provide user access to the AWS Management Console"

Password → Select: Custom password
Enter a strong temporary password

Keep checked ✅: "Users must create a new password at next sign-in"

→ Click Next
```

My temporary password: `_______________________` *(keep this private)*

- [ ] ✅ User details filled in

---

### Step 4 — Assign Permissions

```
Permissions options → Select: Attach policies directly

Search box → Type: AdministratorAccess

Check ✅ the box next to: AdministratorAccess

→ Click Next
```

> 💡 AdministratorAccess grants full permissions — perfect for a learning sandbox. In production, always restrict to minimum required permissions.

- [ ] ✅ AdministratorAccess policy attached

---

### Step 5 — Review and Create

```
Review the User details and Permissions summary
→ Click "Create user"
```

- [ ] ✅ User created successfully

---

### Step 6 — Save the Login Details

```
Click "Download .csv file"   ← Save this file now
OR copy the Console sign-in URL
```

> ⚠️ This is the only time you can download these credentials. Do not skip this step.

My Console sign-in URL:
```
_______________________________________________
```

- [ ] ✅ Credentials saved

---

### Step 7 — Verify the Login Works

```
Open a Private / Incognito browser window
Paste the Console sign-in URL
Enter: username + temporary password → Sign in
Set a new password when prompted
Confirm: You land on the AWS Console dashboard
```

- [ ] ✅ New user can log in successfully

---

## 🧠 Reflection

```
Why is it dangerous to share your Root account credentials
with someone else?

→ _______________________________________________
  _______________________________________________

Name one real-world situation where IAM users are essential:

→ _______________________________________________
```

---

## 🧹 Clean-Up (Do this at teardown)

```
IAM → Users → Select user → Delete → Type username → Confirm
```

---

## ✅ Chapter Checklist

- [ ] IAM user created with console access
- [ ] AdministratorAccess policy attached
- [ ] Credentials downloaded and saved
- [ ] New user login verified in incognito window

---

## 🏆 Badge Unlocked

> **IAM GUARDIAN 🔐** — You know how to secure cloud access the right way.

---

> ✅ **Done? Move to the next chapter:**
> 👉 [Chapter 06 — Hands-On Lab: S3 Static Website](06-lab-s3.md)
