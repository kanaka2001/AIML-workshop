# Chapter 05 — Hands-On Lab: AWS IAM User Setup

**Day 1 | 12:20 PM – 12:40 PM | Core Lab**

---

## 🎯 What You Will Do

Create a new IAM user with AWS Console access — the secure, professional way to work on AWS.

---

## 🔐 What is AWS IAM?

<p align="center">
  <img src="https://raw.githubusercontent.com/sashee/aws-svg-icons/master/docs/Architecture-Service-Icons_07302021/Arch_Security-Identity-Compliance/64/Arch_AWS-Identity-and-Access-Management_64.svg" width="80" alt="IAM"/>
  <br/>
  <b>AWS Identity and Access Management</b>
</p>

IAM controls two things:

- **Authentication** — Who can log into your AWS account
- **Authorization** — What they are allowed to create, view, or delete

Think of it as a digital keycard system for your cloud environment. Every person gets their own keycard with exactly the doors they need access to — no more, no less.

---

## ❓ Why Not Just Use the Root Account?

<p align="center">

```
ROOT ACCOUNT              IAM USER
──────────────────────    ──────────────────────────────
Created at sign-up        Created by you for specific work
Unlimited access          Only the permissions you grant
Includes billing control  No billing access unless granted
NEVER share this          Safe to use for daily tasks
```

</p>

> **Golden Rule:** Create an IAM user for all hands-on work. Never use Root for daily tasks.

---

## 👣 Step-by-Step

### Step 1 — Open IAM

```
AWS Console → Search bar → Type: IAM → Click IAM
```

You should see the **IAM Dashboard** with a menu on the left side.

<p align="center">
  <img src="../Screenshot_2026-09-20_23-23-27.png" width="720" alt="IAM Dashboard"/>
  <br/>
  <em>IAM Dashboard — your access management control panel</em>
</p>

---

### Step 2 — Go to Users

```
Left sidebar → Users → Click "Create user" (orange button, top right)
```

<p align="center">
  <img src="../Screenshot_2026-09-20_23-23-44.png" width="720" alt="IAM Users list"/>
  <br/>
  <em>IAM Users list — click "Create user" to begin</em>
</p>

---

### Step 3 — Enter User Details

```
User name → Enter: workshop-student

✅ Check: "Provide user access to the AWS Management Console"

Password → Select: Custom password
           Enter a strong temporary password

✅ Keep: "Users must create a new password at next sign-in"

→ Click Next
```

<p align="center">
  <img src="../Screenshot_2026-09-20_23-24-05.png" width="720" alt="Create user — User details"/>
  <br/>
  <em>Step 1 — fill in the username and enable console access</em>
</p>

---

### Step 4 — Assign Permissions

```
Permissions options → Select: Attach policies directly

Search box → Type: AdministratorAccess

✅ Check the box next to: AdministratorAccess

→ Click Next
```

> 💡 **AdministratorAccess** grants full permissions — ideal for a learning sandbox. In production environments, always use the minimum permissions required.

<p align="center">
  <img src="../Screenshot_2026-09-20_23-24-31.png" width="720" alt="Attach permissions policy"/>
  <br/>
  <em>Step 2 — attach AdministratorAccess policy</em>
</p>

---

### Step 5 — Review and Create

```
Review the User details and Permissions summary
→ Click "Create user"
```

<p align="center">
  <img src="../Screenshot_2026-09-20_23-24-43.png" width="720" alt="Review and create user"/>
  <br/>
  <em>Step 3 — review everything before clicking Create user</em>
</p>

---

### Step 6 — Save the Login Details

```
→ Click "Download .csv file"   ← Do this now
OR copy the Console sign-in URL
```

> ⚠️ This is the **only time** you can download these credentials. Do not skip this step.

<p align="center">
  <img src="../Screenshot_2026-09-20_23-24-56.png" width="720" alt="User created — download credentials"/>
  <br/>
  <em>User created — download the .csv file now before closing this page</em>
</p>

---

### Step 7 — Verify the Login Works

```
Open a Private / Incognito browser window
Paste the Console sign-in URL
Enter: username + temporary password → Sign in
Set a new password when prompted
Confirm: You land on the AWS Console dashboard ✅
```

---

## ✅ Chapter Checklist

- [ ] IAM user created with Console access
- [ ] AdministratorAccess policy attached
- [ ] Credentials downloaded and saved
- [ ] New user login verified in incognito window

---

## 🌐 Share Your Progress

> 🎉 Just created your first AWS IAM user!
> Share it with the community: **[@awssbg_dbit](https://www.instagram.com/awssbg_dbit/)**
> **#AWSBuildersLab #IAM #HexaVerse26**

---

## 🏆 Badge Unlocked

> ### 🔐 IAM GUARDIAN
> You know how to secure cloud access the right way.

---

> ✅ **Done? Move to the next lab:**
> ### 👉 [Chapter 06 — Hands-On Lab: S3 Static Website](06-lab-s3.md)
