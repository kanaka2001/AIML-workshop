# ☁️ AWS Builders Lab — Participant Handbook
### HexaVerse CloudFest '26

> **Department of AI & ML, Don Bosco Institute of Technology (DBIT), Bengaluru**
> **In association with AWS Student Builder Group – DBIT**

---

```
 ██████╗ ██╗      ██████╗ ██╗   ██╗██████╗
██╔════╝ ██║     ██╔═══██╗██║   ██║██╔══██╗
██║      ██║     ██║   ██║██║   ██║██║  ██║
██║      ██║     ██║   ██║██║   ██║██║  ██║
╚██████╗ ███████╗╚██████╔╝╚██████╔╝██████╔╝
 ╚═════╝ ╚══════╝ ╚═════╝  ╚═════╝ ╚═════╝
      Build. Deploy. Automate. Innovate.
```

---

## 👋 Hello, Builder!

Welcome to **AWS Builders Lab** — two days of hands-on cloud learning, real deployments, and some serious fun.

This handbook is your **companion for both days**. It is not just a document to read — it is designed for you to **interact with**:

- ☐ Check off steps as you complete them
- 💬 Answer reflection questions
- ✏️ Fill in your own notes
- 🏆 Earn session badges as you go

> **Tip:** Bring a pen. The best learning happens when you write things down.

---

## 📋 My Workshop Profile

*Fill this in before Day 1 starts:*

| | |
|---|---|
| **Name** | _________________ |
| **Semester & Section** | _________________ |
| **Roll Number** | _________________ |
| **AWS Account Email** | _________________ |
| **One thing I want to build someday** | _________________ |

---

## 🗺️ Your Two-Day Journey

```
DAY 1                                    DAY 2
─────────────────────────────────────    ─────────────────────────────────────
☐ Welcome & Community Intro              ☐ Day 1 Recap
☐ Icebreaker                             ☐ SageMaker Canvas Intro
☐ Cloud History & AWS                    ☐ Hands-On: MLOps Pipeline
☐ AWS Builder Center                     ☐ Quiz Battle
☐ Hands-On: IAM + S3 + EC2              ☐ PartyRock AI Builder
☐ Bedrock Overview                       ☐ Certification Guidance
☐ Resource Teardown                      ☐ Resource Teardown
☐ Quiz & Prize Distribution              ☐ Feedback & Certificates
```

---

---

# 📅 DAY 1
## Cloud & AWS Fundamentals, Core Services & AI Overview

**Date:** 21 September 2026 | **Venue:** MBA Seminar Hall | **Time:** 11:15 AM – 3:00 PM

---

## ╔══════════════════════════════════════╗
## ║  SESSION 1 — Welcome & Intro        ║
## ║  11:15 AM – 11:45 AM  |  30 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Understand who is organizing this workshop, what AWS SBG DBIT is, and what you will walk away with after two days.

---

### 📖 What is AWS Student Builder Group – DBIT?

AWS Student Builder Group (SBG) – DBIT is a **student-driven community** at Don Bosco Institute of Technology, focused on:

- Cloud computing, AI, and Machine Learning
- Organizing hands-on workshops and technical events
- Helping students move from theory to building real solutions
- Connecting students with AWS learning resources and career opportunities

This workshop — **AWS Builders Lab** — is part of **HexaVerse CloudFest '26**, the department's annual tech celebration.

---

### 🗓️ What You Will Build Over Two Days

| Day | What You Will Do |
|---|---|
| **Day 1** | Set up IAM users, host a website on S3, launch an EC2 virtual machine, explore Bedrock AI |
| **Day 2** | Build an ML model with SageMaker Canvas, experiment with PartyRock AI, get certified |

---

### ✅ Session 1 Checklist

- [ ] I know what AWS Student Builder Group – DBIT is
- [ ] I understand the two-day agenda
- [ ] My laptop is open and AWS Console is accessible
- [ ] I have noted the Wi-Fi credentials: `__________________`

---

### ✏️ My Notes — Session 1

```
_______________________________________________
_______________________________________________
_______________________________________________
```

### 🏆 Badge Unlocked: `CLOUD NEWCOMER` ☁️

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 2 — Icebreaker & Settle-In ║
## ║  11:45 AM – 11:55 AM  |  10 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Get comfortable, meet your fellow builders, and set your personal learning intention for the day.

---

### 🎲 Activity: Cloud Connection Icebreaker

Introduce yourself to the person next to you using these four points:

```
1. My name is: _________________________________

2. My technical interests are: _________________
   ____________________________________________

3. Have I used AWS or any cloud before?
   ☐ Never heard of it
   ☐ Heard of it but never used it
   ☐ Tried it once or twice
   ☐ Use it regularly

4. One thing I want to learn today: ____________
   ____________________________________________
```

---

### 💬 Bonus Reflection

> *"If you could build one technology solution to solve a problem on your campus — what would it be?"*

```
My idea: ______________________________________
_______________________________________________
_______________________________________________
```

---

### ✅ Session 2 Checklist

- [ ] I introduced myself to at least one new person
- [ ] I have written down my learning intention for today
- [ ] I am ready and excited to build!

---

### 🏆 Badge Unlocked: `CONNECTED BUILDER` 🤝

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 3 — History of Cloud & AWS ║
## ║  11:55 AM – 12:10 PM  |  15 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Understand why cloud computing was invented, what problems it solved, and how AWS grew into the world's leading cloud platform.

---

### 🕐 Before Cloud Computing

Before cloud computing, building software meant owning physical hardware:

```
TRADITIONAL APPROACH
┌─────────────────────────────────────────┐
│  Buy servers  →  Set up data center     │
│  Configure networking  →  Hire IT team  │
│  Estimate future traffic  →  Buy more   │
│  hardware than you need  →  Pay forever │
└─────────────────────────────────────────┘
```

**Problems this created:**

| Challenge | Real Impact |
|---|---|
| High upfront cost | Small projects couldn't afford to start |
| Hard to scale | Adding capacity took weeks |
| Wasted resources | Servers sat idle 70% of the time |
| Slow to deploy | Infrastructure setup took days |

---

### ⚡ The Cloud Changes Everything

```
CLOUD APPROACH
┌─────────────────────────────────────────┐
│  Open browser  →  Launch server in      │
│  60 seconds  →  Pay only while running  │
│  Scale up in minutes  →  No hardware    │
│  to buy or maintain                     │
└─────────────────────────────────────────┘
```

> **Cloud computing** = on-demand IT resources over the internet, with pay-as-you-go pricing.

---

### 📅 AWS Timeline

```
2002  →  Amazon starts building internal infrastructure tools
2006  →  AWS launches publicly (S3 and EC2 were the first services)
2010  →  Amazon.com moves entirely to AWS
2014  →  AWS Lambda introduces serverless computing
2017  →  AWS adds AI/ML services (SageMaker, Rekognition, etc.)
2023  →  AWS Bedrock launches for Generative AI
TODAY →  AWS has 200+ services used by millions worldwide
```

---

### 🧩 Quick Concept Check

*Fill in the blanks (answers at the bottom of this section):*

```
1. Cloud computing delivers IT resources over the _____________.

2. Instead of buying hardware, you _______ it and pay per ______.

3. AWS was launched in the year _______.

4. The first two AWS services were ______ and ______.
```

*(Answers: internet / rent, use / 2006 / S3, EC2)*

---

### ✅ Session 3 Checklist

- [ ] I understand why cloud computing replaced traditional infrastructure
- [ ] I know what AWS is and when it launched
- [ ] I can name at least 3 AWS services

### ✏️ My Notes — Session 3

```
_______________________________________________
_______________________________________________
_______________________________________________
```

### 🏆 Badge Unlocked: `CLOUD HISTORIAN` 📜

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 4 — AWS Builder Center     ║
## ║  12:10 PM – 12:20 PM  |  10 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Discover where to keep learning after this workshop ends using AWS's free official learning platform.

---

### 🔗 What is AWS Builder Center?

**builder.aws.com** is the official online home for the AWS community. It is free and does not require an AWS account with billing — just an AWS Builder ID.

| Section | What You Get |
|---|---|
| **Learn** | Structured learning paths and training content |
| **Build** | Hands-on workshops and tutorials |
| **Community** | Connect with fellow builders worldwide |
| **Toolbox** | SDKs, tools, and developer resources |

---

### 🖥️ Live Demo — Do This Now

Follow along with the facilitator:

```
Step 1 → Open  https://builder.aws.com
Step 2 → Click "Sign In" → Use your AWS Builder ID
         (Different from your AWS Console account)
Step 3 → Explore the "Learn" section
Step 4 → Find one hands-on workshop that interests you
Step 5 → Bookmark it for after the workshop
```

---

### 🎯 My Post-Workshop Learning Goal

```
After this workshop, the ONE AWS service or skill
I want to master is:

→ ____________________________________________

I will use this resource to learn it:

→ ____________________________________________
```

---

### ✅ Session 4 Checklist

- [ ] I have opened builder.aws.com
- [ ] I have signed in with my AWS Builder ID
- [ ] I have identified one learning goal for after the workshop

### 🏆 Badge Unlocked: `LIFELONG LEARNER` 📚

---
---

## ╔══════════════════════════════════════════════════╗
## ║  SESSION 5 — HANDS-ON: IAM + S3 + EC2           ║
## ║  12:20 PM – 01:15 PM  |  55 mins  🔥 CORE LAB  ║
## ╚══════════════════════════════════════════════════╝

### 🎯 Session Goal
Create your first IAM user, host a real website on S3, and launch your first virtual machine on EC2.

> ⚠️ **This is the most important session of Day 1. Follow every step carefully.**

---

## 🔐 LAB 5A — AWS IAM: Create a User with Console Access

### What is IAM?

**IAM (Identity and Access Management)** controls **who** can log into your AWS account and **what** they are allowed to do.

```
WITHOUT IAM                    WITH IAM
──────────────                 ──────────────────────────
Everyone uses Root →           Each person gets their own
One password for all →         login with only the access
Full access to billing →       they need
Huge security risk             Secure and auditable
```

> 🔑 **Golden Rule:** Never use your Root account for daily work. Always create IAM users.

---

### 📋 Pre-Lab Check

Before starting, confirm:

- [ ] I am signed in to the AWS Console as Root or Admin
- [ ] I have a username ready for the new user (e.g., `workshop-student`)
- [ ] I have a temporary password ready

---

### 👣 Step-by-Step: Create an IAM User

**STEP 1 — Open IAM**

```
AWS Console → Search bar → Type "IAM" → Click IAM
```

- [ ] ✅ I can see the IAM Dashboard

---

**STEP 2 — Start Creating a User**

```
Left sidebar → Users → Click "Create user" (orange button)
```

- [ ] ✅ I am on the "Create user" page

---

**STEP 3 — Enter User Details**

```
User name → Enter: workshop-student

✅ Check: "Provide user access to the AWS Management Console"

Password type → Select: Custom password
Enter a strong temporary password: ___________________

✅ Keep checked: "Users must create a new password at next sign-in"

→ Click Next
```

- [ ] ✅ User details filled in

---

**STEP 4 — Assign Permissions**

```
Permissions options → Select: "Attach policies directly"

Search box → Type: AdministratorAccess

✅ Check the box next to: AdministratorAccess

→ Click Next
```

> 💡 *AdministratorAccess = full permissions. Perfect for a learning sandbox. In real work, always use minimum required permissions.*

- [ ] ✅ AdministratorAccess policy attached

---

**STEP 5 — Review and Create**

```
Review the summary → Click "Create user"
```

- [ ] ✅ User created successfully!

---

**STEP 6 — Save the Login Details**

```
Click "Download .csv file"  ← SAVE THIS FILE
OR
Copy the Console sign-in URL
```

> ⚠️ *This is the only time you can download these credentials. Do not skip this step.*

- [ ] ✅ Credentials saved

---

**STEP 7 — Verify the New Login Works**

```
Open a Private/Incognito browser window
Paste the Console sign-in URL
Enter: username + temporary password → Sign in
Set a new password when prompted
Confirm: You land on the AWS Console dashboard ✅
```

- [ ] ✅ New user can log in successfully

---

### 🧠 Reflection — IAM

```
Why is it dangerous to share your Root account credentials?

→ ____________________________________________
  ____________________________________________

Name one real-world situation where IAM users are essential:

→ ____________________________________________
  ____________________________________________
```

---

### 🧹 IAM Clean-Up (Do this at teardown time)

```
IAM → Users → Select user → Delete → Type username → Confirm
```

---

### 🏆 Mini Badge: `IAM GUARDIAN` 🔐

---
---

## 🪣 LAB 5B — Amazon S3: Host a Static Website

### What is Amazon S3?

**S3 (Simple Storage Service)** stores files in the cloud — images, videos, documents, and even entire websites — and gives them a URL anyone can visit.

```
TRADITIONAL WEB HOSTING         S3 WEBSITE HOSTING
───────────────────────         ──────────────────
Rent a server                   No server needed
Install web server software     Upload files directly
Configure Apache/Nginx          Enable one setting
Pay monthly for server          Pay only for storage used
```

---

### 📋 Pre-Lab Check

Prepare these two files on your laptop right now:

**index.html** — create this file and paste:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My AWS S3 Website</title>
    <style>
      body { font-family: Arial; text-align: center; padding: 50px;
             background: #0f1117; color: #ffffff; }
      h1 { color: #FF9900; }
    </style>
  </head>
  <body>
    <h1>☁️ Hello from Amazon S3!</h1>
    <p>Hosted during AWS Builders Lab — HexaVerse CloudFest '26</p>
    <p>Built by: <strong>YOUR NAME HERE</strong></p>
  </body>
</html>
```

**error.html** — create this file and paste:

```html
<!DOCTYPE html>
<html>
  <body style="font-family:Arial; text-align:center; padding:50px;">
    <h1>404 — Page Not Found</h1>
    <a href="index.html">Go back home</a>
  </body>
</html>
```

**My bucket name** (must be globally unique):
```
my-dbit-website-________________ (add your roll number)
```

- [ ] ✅ index.html ready on my laptop
- [ ] ✅ error.html ready on my laptop
- [ ] ✅ Unique bucket name decided

---

### 👣 Step-by-Step: Create an S3 Bucket and Host a Website

**PHASE A — Create the Bucket**

```
AWS Console → Search "S3" → Click S3 → Click "Create bucket"
```

```
Bucket name   →  Enter your unique bucket name
AWS Region    →  Asia Pacific (Mumbai) ap-south-1
```

```
Object Ownership  →  Leave: ACLs disabled (recommended)
```

```
Block Public Access:
  UNCHECK ☐ "Block all public access"
  CHECK   ✅ "I acknowledge that current settings might result
              in this bucket becoming public"
```

```
Bucket Versioning  →  Disable
Encryption         →  Leave default

→ Click "Create bucket"
```

- [ ] ✅ Bucket created

---

**PHASE B — Upload Your Files**

```
Click your bucket name → Objects tab → Click "Upload"
→ Click "Add files"
→ Select: index.html and error.html
→ Click "Upload"
→ Wait for green "Upload succeeded" banner → Click "Close"
```

- [ ] ✅ Files uploaded

---

**PHASE C — Enable Static Website Hosting**

```
Properties tab → Scroll to bottom → "Static website hosting" → Edit

Static website hosting   →  Enable
Hosting type             →  Host a static website
Index document           →  index.html
Error document           →  error.html

→ Click "Save changes"
```

- [ ] ✅ Website hosting enabled

---

**PHASE D — Add the Public Bucket Policy**

```
Permissions tab → Bucket policy → Edit
```

Paste this policy (replace `YOUR-BUCKET-NAME` with your actual name):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

```
→ Click "Save changes"
```

- [ ] ✅ Bucket policy saved

---

**PHASE E — Visit Your Live Website!**

```
Properties tab → Scroll to "Static website hosting"
→ Click the Bucket website endpoint URL
```

🎉 **Your website is live on the internet!**

```
My website URL: _______________________________
```

- [ ] ✅ Website is accessible in browser

---

### 🧠 Reflection — S3

```
What is the difference between "stopping" a website
hosted on S3 vs. a website hosted on your own computer?

→ ____________________________________________
  ____________________________________________

What kind of website CAN'T you host on S3?
(Hint: think backend)

→ ____________________________________________
```

---

### 🧹 S3 Clean-Up (Do at teardown)

```
Open bucket → Select all files → Delete → Confirm
S3 Dashboard → Select bucket → Delete bucket → Type name → Confirm
```

---

### 🏆 Mini Badge: `STATIC ARCHITECT` 🪣

---
---

## 💻 LAB 5C — Amazon EC2: Launch Your First Virtual Machine

### What is Amazon EC2?

**EC2 (Elastic Compute Cloud)** gives you virtual computers in the cloud. Launch one in 60 seconds, use it, and shut it down when done.

```
YOUR LAPTOP                    EC2 INSTANCE IN THE CLOUD
──────────────                 ─────────────────────────
Fixed specs                    Choose any specs you need
One OS                         Any OS (Ubuntu, Windows, etc.)
Sits in your room              Runs in AWS data centers globally
Always on = always paying      Pay only when running
```

---

### 📋 Pre-Lab Check

- [ ] I am signed in to the AWS Console
- [ ] I know which region I am using: `___________`

---

### 👣 Step-by-Step: Launch an EC2 Instance

**STEP 1 — Navigate to EC2**

```
AWS Console → Search "EC2" → Click EC2
→ Click "Launch instance" (orange button)
```

- [ ] ✅ On the Launch instance page

---

**STEP 2 — Configure the Instance**

```
Name:  my-first-instance
```

```
AMI (Operating System):
→ Select: Ubuntu Server 22.04 LTS (HVM), SSD Volume Type
→ Architecture: 64-bit (x86)
```

```
Instance type:
→ Select: t2.micro    ← FREE TIER eligible ✅
```

- [ ] ✅ AMI and instance type selected

---

**STEP 3 — Create a Key Pair (Your Login Key)**

```
Key pair → Click "Create new key pair"

Key pair name:   my-workshop-key
Key pair type:   RSA
File format:     .pem

→ Click "Create key pair"
```

> ⚠️ **The .pem file will download automatically. Save it somewhere safe. You cannot download it again.**

```
My key file is saved at: ________________________
```

- [ ] ✅ Key pair downloaded and saved safely

---

**STEP 4 — Network Settings**

```
✅ Allow SSH traffic from → My IP
✅ Allow HTTP traffic from the internet
```

- [ ] ✅ Security settings configured

---

**STEP 5 — Launch!**

```
Storage: Leave default (8 GiB)
→ Click "Launch instance"
→ Click "View all instances"
```

Wait until **Instance state** shows: `✅ Running`

```
My instance Public IP: ___________________________
```

- [ ] ✅ Instance is Running

---

**STEP 6 — (Optional) Connect via SSH**

Open your terminal and run:

```bash
chmod 400 my-workshop-key.pem
ssh -i my-workshop-key.pem ubuntu@YOUR-PUBLIC-IP
```

If it works, you are inside your cloud computer!

- [ ] ✅ Successfully connected to my EC2 instance

---

### 🧠 Reflection — EC2

```
What is one advantage of EC2 over buying a physical laptop
for running server applications?

→ ____________________________________________
  ____________________________________________

If your website suddenly gets 10x more traffic,
what would you do with EC2?

→ ____________________________________________
```

---

### 🧹 EC2 Clean-Up ⚠️ DO NOT SKIP

```
EC2 → Instances → Select your instance
→ Instance state → Terminate instance → Confirm
```

> 🚨 *EC2 charges by the hour. Terminated = no more charges. Stopped = still charges for storage.*

- [ ] ✅ Instance terminated

---

### 🏆 Mini Badge: `CLOUD ENGINEER` 💻

---

### 🍽️ LUNCH BREAK — 01:15 PM – 01:45 PM

```
╔══════════════════════════════╗
║  🍽️  LUNCH BREAK  🍽️         ║
║  30 minutes                  ║
║  Network, recharge, relax!   ║
╚══════════════════════════════╝
```

**Before you leave for lunch — confirm:**

- [ ] IAM user created ✅
- [ ] S3 website is live ✅
- [ ] EC2 instance launched ✅
- [ ] All key files saved ✅

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 6 — AWS Bedrock Overview   ║
## ║  02:00 PM – 02:15 PM  |  15 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Understand what Generative AI is, how Amazon Bedrock makes it accessible, and try it in the browser.

---

### 🤖 What is Amazon Bedrock?

**Amazon Bedrock** is a fully managed service that gives you access to powerful AI models from top AI companies — through a simple API — without managing any infrastructure.

```
WITHOUT BEDROCK                WITH BEDROCK
───────────────                ──────────────────────────
Train your own AI model        Access pre-trained models
(needs millions of data points) instantly via API
Huge compute costs             Pay per request
Months of work                 Works in minutes
PhD-level expertise needed     Any developer can use it
```

---

### 🧠 Key Concepts

| Term | Simple Explanation |
|---|---|
| **Foundation Model (FM)** | A giant AI pre-trained on massive data — ready to use |
| **Prompt** | The instruction or question you give to the AI |
| **Inference** | The AI generating a response to your prompt |
| **Claude (Anthropic)** | A powerful conversational AI model available on Bedrock |
| **Titan (Amazon)** | Amazon's own AI model for text and embeddings |

---

### 🖥️ Try It — Bedrock Playground

Follow along with the facilitator:

```
AWS Console → Search "Bedrock" → Click Amazon Bedrock
→ Click "Get started"
→ Left sidebar → Playgrounds → Text
→ Select a model (e.g., Claude)
→ Type a prompt and see the response
```

**My prompt:** `___________________________________`

**What the AI said:** `_______________________________`
`____________________________________________`

- [ ] ✅ I tried the Bedrock playground

---

### 💬 Think About This

```
What is one problem in your college or community
that a Generative AI app could help solve?

→ ____________________________________________
  ____________________________________________
```

---

### ✅ Session 6 Checklist

- [ ] I understand what a Foundation Model is
- [ ] I know what Amazon Bedrock is used for
- [ ] I tried the Bedrock text playground

### 🏆 Badge Unlocked: `AI EXPLORER` 🤖

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 7 — Resource Teardown      ║
## ║  02:15 PM – 02:25 PM  |  10 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Safely delete all resources created today to prevent unexpected billing.

> 💸 **Cloud resources cost money when left running. Teardown is not optional — it is a professional skill.**

---

### 🧹 Day 1 Teardown Checklist

Work through this list with the facilitator:

**EC2:**
```
EC2 → Instances → Select instance
→ Instance state → Terminate instance → Confirm
```
- [ ] ✅ EC2 instance terminated

**S3:**
```
S3 → Open bucket → Select all objects → Delete → Confirm
S3 Dashboard → Select bucket → Delete bucket → Type name → Confirm
```
- [ ] ✅ S3 bucket deleted

**IAM User (optional):**
```
IAM → Users → Select user → Delete → Type username → Confirm
```
- [ ] ✅ IAM user deleted (or kept for Day 2)

**Final Billing Check:**
```
AWS Console → Search "Billing" → Bills → Check current charges
```
- [ ] ✅ No unexpected charges visible

---

### 🏆 Badge Unlocked: `RESPONSIBLE BUILDER` 🧹

---

## 🎉 Day 1 Complete!

### My Day 1 Progress

```
SESSION 1  Welcome & Intro            ☐ Done
SESSION 2  Icebreaker                 ☐ Done
SESSION 3  Cloud History & AWS        ☐ Done
SESSION 4  AWS Builder Center         ☐ Done
SESSION 5A IAM User Creation          ☐ Done
SESSION 5B S3 Static Website          ☐ Done
SESSION 5C EC2 Virtual Machine        ☐ Done
SESSION 6  AWS Bedrock                ☐ Done
SESSION 7  Resource Teardown          ☐ Done
```

### 🏆 Badges Collected Today

```
☐ CLOUD NEWCOMER     ☐ CONNECTED BUILDER   ☐ CLOUD HISTORIAN
☐ LIFELONG LEARNER   ☐ IAM GUARDIAN        ☐ STATIC ARCHITECT
☐ CLOUD ENGINEER     ☐ AI EXPLORER         ☐ RESPONSIBLE BUILDER
```

### ✏️ My Top 3 Learnings from Day 1

```
1. ____________________________________________
2. ____________________________________________
3. ____________________________________________
```

### 💤 Rest Up — Day 2 goes deeper!

---

---

# 📅 DAY 2
## MLOps Deep Dive, Generative AI & Hands-On Workshop

**Date:** 22 September 2026 | **Venue:** MBA Seminar Hall | **Time:** 10:00 AM – 01:15 PM

---

## ╔══════════════════════════════════════╗
## ║  SESSION 1 — Settle-In & Recap      ║
## ║  10:00 AM – 10:20 AM  |  20 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Settle in, verify all systems are ready, and quickly recap what we covered on Day 1.

---

### 📋 Day 2 Readiness Check

- [ ] Laptop is open and charged
- [ ] AWS Console is accessible
- [ ] I remember my AWS account credentials
- [ ] I am ready for deeper cloud learning!

---

### 🔁 Day 1 Recall — Fill in the Blanks

*Test your memory before the facilitator runs the recap:*

```
1. IAM stands for: ________________________________

2. S3 is used for: _________________________________

3. EC2 gives you: __________________________________

4. Bedrock is used for: ____________________________

5. Why do we do resource teardown?
   → _______________________________________________
```

---

### ✅ Session 1 Checklist

- [ ] I reviewed Day 1 concepts
- [ ] I can explain what IAM, S3, EC2, and Bedrock do

### 🏆 Badge Unlocked: `DAY 2 READY` 🌅

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 2 — SageMaker Canvas Intro ║
## ║  10:20 AM – 10:30 AM  |  10 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Understand what SageMaker Canvas is, why it matters for AIML students, and what you will build.

---

### 🧠 What is Amazon SageMaker Canvas?

**SageMaker Canvas** is a no-code ML tool that lets you build, train, and deploy machine learning models through a visual drag-and-drop interface — without writing code.

```
TRADITIONAL ML PIPELINE        SAGEMAKER CANVAS
───────────────────────        ─────────────────────────────
Write Python code              Click, drag, drop
Handle data preprocessing      Automatic data preparation
Choose algorithms manually     AutoML selects best algorithm
Tune hyperparameters           Automatic tuning
Deploy model yourself          One-click deployment
```

---

### 📊 Types of Problems Canvas Can Solve

| Problem Type | Example |
|---|---|
| **Binary Classification** | Will this customer churn? (Yes/No) |
| **Multi-class Classification** | Which category does this email belong to? |
| **Regression** | What price will this house sell for? |
| **Time-series Forecasting** | What will next month's sales be? |

---

### 🎯 What We Will Build Today

**Customer Churn Predictor** — A model that predicts whether a telecom customer will leave (churn) based on their usage patterns.

```
INPUT DATA (CSV)
  ↓
Customer usage history + billing info + support calls
  ↓
SageMaker Canvas trains ML model automatically
  ↓
OUTPUT: Probability score → Will this customer churn?
```

---

### ✅ Session 2 Checklist

- [ ] I understand what SageMaker Canvas is
- [ ] I understand what "binary classification" means
- [ ] I am excited to build my first ML model!

### 🏆 Badge Unlocked: `ML INITIATE` 🧠

---
---

## ╔══════════════════════════════════════════════════╗
## ║  SESSION 3 — HANDS-ON: MLOps Deep Dive          ║
## ║  10:30 AM – 11:55 AM  |  85 mins  🔥 CORE LAB  ║
## ╚══════════════════════════════════════════════════╝

### 🎯 Session Goal
Build a complete end-to-end ML pipeline using SageMaker Canvas — from raw data to live predictions.

---

### 🗺️ What You Will Complete in This Lab

```
STEP 1  → Open SageMaker Canvas
STEP 2  → Import the dataset
STEP 3  → Create a new model
STEP 4  → Set the prediction target
STEP 5  → Train the model (Quick Build)
STEP 6  → Analyze accuracy & feature importance
STEP 7  → Make predictions
```

---

### 📋 Pre-Lab Check

The facilitator will share a CSV file with you. Confirm:

- [ ] I have the customer churn CSV file on my laptop
- [ ] I am signed in to the AWS Console

---

### 👣 Step-by-Step: SageMaker Canvas MLOps Pipeline

**STEP 1 — Open SageMaker Canvas**

```
AWS Console → Search "SageMaker" → Click Amazon SageMaker
Left sidebar → Applications and IDEs → Canvas
→ Click "Open Canvas"
```

> ⏳ *First-time setup may take 1–2 minutes. This is normal.*

- [ ] ✅ Canvas workspace is open

---

**STEP 2 — Import the Dataset**

```
Left sidebar → Datasets → Click "Import data"
→ Select "Upload"
→ Choose the customer churn CSV file
→ Click "Create dataset"
```

- [ ] ✅ Dataset imported

---

**STEP 3 — Create a New Model**

```
Left sidebar → Models → Click "New model"
Model name → Enter: Customer-Churn-Predictor
Select your uploaded dataset → Click "Select dataset"
```

- [ ] ✅ Model created and dataset attached

---

**STEP 4 — Set the Prediction Target**

```
In the "Build" tab:
Target column → Select: Churn
```

Canvas automatically detects: **Two-category prediction (Binary Classification)** ✅

- [ ] ✅ Target column set to "Churn"

---

**STEP 5 — Train the Model**

```
Click "Validate data"    ← Check for errors first
→ Wait for validation to complete
→ Click "Quick build"
```

> ⏳ *Quick Build trains the model in under 10 minutes.*
> *While it runs, read the next section on feature importance.*

```
Training started at: _____________ (note the time)
Training finished at: _____________
Total training time: _____________
```

- [ ] ✅ Quick Build started

---

### 📖 While You Wait — What is AutoML?

**AutoML (Automated Machine Learning)** automatically:

1. Cleans and transforms your data
2. Tries multiple ML algorithms
3. Tunes each algorithm's settings
4. Picks the best performing model
5. Returns accuracy metrics

Canvas uses AutoML under the hood — that is why you do not need to write code.

---

**STEP 6 — Analyze the Results**

Once training completes, the **Analyze** tab opens automatically.

```
Review these metrics:

Model accuracy: _______% 

(e.g., 94.2% means the model correctly predicts
churn 94.2% of the time on test data)
```

**Column Impact (Feature Importance) Chart:**

The chart shows which columns matter most for predicting churn.

```
Top 3 features that influence churn in my model:

1. ____________________________________________
2. ____________________________________________
3. ____________________________________________
```

- [ ] ✅ Accuracy noted
- [ ] ✅ Top features identified

---

**STEP 7 — Make Predictions**

```
Click "Predict" (bottom right)
```

**Option A — Single Prediction:**
```
Select "Single prediction"
Adjust the sliders for individual columns
→ Watch the churn probability change in real time
```

Try this: Set `Cust_Service_Calls` to maximum. Does churn probability go up?

```
My observation: ___________________________________
```

**Option B — Batch Prediction:**
```
Select "Batch prediction"
Upload a new CSV of customers
→ Canvas scores every customer at once
```

- [ ] ✅ I made at least one single prediction
- [ ] ✅ I observed which features affect the prediction most

---

### 🗺️ What You Just Built

```
Raw CSV Data
    ↓
Data Import & Validation (Canvas)
    ↓
Automated Feature Engineering
    ↓
AutoML Model Training
    ↓
Model Evaluation (Accuracy + Feature Importance)
    ↓
Live Predictions (Single & Batch)
    ↓
✅ End-to-End MLOps Pipeline — Complete!
```

---

### 🧠 Reflection — MLOps

```
What does "model accuracy of 94%" mean in practice?
(Think: what happens to the other 6%?)

→ ____________________________________________
  ____________________________________________

Name one real-world industry where churn prediction
would be valuable:

→ ____________________________________________
```

---

### 🏆 Mini Badge: `MLOPS ENGINEER` 🔬

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 4 — The Ultimate Quiz      ║
## ║  11:55 AM – 12:10 PM  |  15 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Compete in a live quiz covering Day 1 and Day 2 concepts and win prizes!

---

### 📝 Pre-Quiz Cheat Sheet — Quick Recall

Fill this in before the quiz starts:

```
IAM = ________________________________________
S3  = ________________________________________
EC2 = ________________________________________
Bedrock = ____________________________________
SageMaker Canvas = ___________________________
MLOps = ______________________________________
AutoML = _____________________________________
Foundation Model = ___________________________
```

---

### 🏆 Quiz Score Tracker

```
Round 1: ___ / 5
Round 2: ___ / 5
Round 3: ___ / 5
Total:   ___ / 15
```

---

### 🏆 Badge Unlocked: `QUIZ WARRIOR` ⚡

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 5 — PartyRock Walkthrough  ║
## ║  12:10 PM – 12:20 PM  |  10 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Build a no-code AI app in under 10 minutes using PartyRock — powered by Amazon Bedrock.

---

### 🎉 What is PartyRock?

**PartyRock** (https://partyrock.aws/) is a browser-based AI app builder where you can create interactive Generative AI applications with zero code and zero AWS account needed.

```
FEATURES
────────────────────────────────────────
✅ No AWS account needed
✅ No code required
✅ Free daily usage
✅ Build with Claude, Llama, Titan models
✅ Share apps via public URL
✅ Others can remix your apps
```

---

### 🧩 PartyRock Widgets You Can Use

| Widget | What It Does |
|---|---|
| **User Input** | Text box for users to type into |
| **Text Generation** | AI writes text based on your prompt |
| **Image Generation** | AI creates images from descriptions |
| **Chatbot** | Conversational AI interface |
| **@WidgetName** | Reference one widget's output in another |

---

### 🖥️ Build Your First AI App — Right Now

```
Step 1 → Go to: https://partyrock.aws/
Step 2 → Sign in with Google, Apple, or Amazon
Step 3 → Click "Build your own app"
Step 4 → Describe your app idea in plain English
```

**App idea suggestions:**
- "An app that generates study notes from a topic"
- "A quiz generator that makes 5 questions from a paragraph"
- "A study buddy chatbot for my AIML exams"

```
My app idea: __________________________________
____________________________________________

My app URL (after publishing): _______________
____________________________________________
```

- [ ] ✅ I signed in to PartyRock
- [ ] ✅ I built or explored at least one app

---

### 🧠 Reflection — PartyRock

```
How is PartyRock different from using ChatGPT?

→ ____________________________________________
  ____________________________________________
```

---

### 🏆 Badge Unlocked: `GENERATIVE CREATOR` 🎨

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 6 — Certification Guidance ║
## ║  12:20 PM – 12:30 PM  |  10 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Know exactly which AWS certification to pursue next and how to get started for free.

---

### 🗺️ AWS Certification Roadmap for AIML Students

```
YOU ARE HERE
    ↓
[START] AWS Certified Cloud Practitioner (CLF-C02)
    ↓     Validates: Overall AWS Cloud understanding
    ↓     Ideal for: All students after this workshop
    ↓
[NEXT]  AWS Certified AI Practitioner (AIF-C01)
    ↓     Validates: AI, ML, and Generative AI concepts
    ↓     Ideal for: AIML students after 2–3 months
    ↓
[THEN]  AWS Certified ML Engineer – Associate (MLA-C02)
    ↓     Validates: Deploying and maintaining ML solutions
    ↓     Ideal for: After 6+ months hands-on experience
    ↓
[GOAL]  AWS Certified Solutions Architect – Associate (SAA-C03)
          Validates: Designing cloud architecture at scale
```

---

### 🎯 My Certification Plan

```
The FIRST certification I will pursue:

→ ____________________________________________

I will start preparing by: ___________________

Target month to take the exam: ______________
```

---

### 📚 Free Study Resources

| Resource | Link | What You Get |
|---|---|---|
| AWS Skill Builder | skillbuilder.aws | Free courses, practice exams |
| AWS Builder Center | builder.aws.com | Workshops, community |
| AWS Free Tier | aws.amazon.com/free | Practice on real services |
| AWS Documentation | docs.aws.amazon.com | Official service guides |

---

### ✅ Session 6 Checklist

- [ ] I know which certification to pursue first
- [ ] I have bookmarked AWS Skill Builder
- [ ] I have a rough timeline for my first certification

### 🏆 Badge Unlocked: `CERTIFIED CONTENDER` 🏆

---
---

## ╔══════════════════════════════════════╗
## ║  SESSION 7 — Resource Teardown      ║
## ║  12:30 PM – 12:45 PM  |  15 mins    ║
## ╚══════════════════════════════════════╝

### 🎯 Session Goal
Safely shut down and delete all Day 2 cloud resources.

---

### 🧹 Day 2 Teardown Checklist

**SageMaker Canvas — STOP the workspace:**

```
Canvas → Bottom-left corner → Account icon → Sign out
```

```
AWS Console → SageMaker → Domains
→ Click Domain name → User Profile
→ Verify Canvas app status shows: Stopped ✅
```

- [ ] ✅ Canvas workspace stopped

**(Optional) Delete SageMaker Domain (if created for this lab only):**

```
Click "Delete user profile" → Confirm
Click "Delete domain" → Confirm
```

- [ ] ✅ Domain deleted (if applicable)

**Any remaining EC2 / S3 resources:**

- [ ] ✅ No running EC2 instances
- [ ] ✅ No S3 buckets remaining

**Final Billing Verification:**

```
AWS Console → Search "Billing" → Bills
→ Verify charges are within Free Tier limits
→ Check "Free Tier Usage" dashboard
```

- [ ] ✅ Billing verified — no unexpected charges

---

### 🏆 Badge Unlocked: `CLEAN CLOUD` 🧹

---
---

## 🎓 Workshop Complete — Final Summary

### 📊 My Two-Day Badge Collection

**Day 1 Badges:**
```
☐ CLOUD NEWCOMER        ☐ CONNECTED BUILDER     ☐ CLOUD HISTORIAN
☐ LIFELONG LEARNER      ☐ IAM GUARDIAN          ☐ STATIC ARCHITECT
☐ CLOUD ENGINEER        ☐ AI EXPLORER           ☐ RESPONSIBLE BUILDER
```

**Day 2 Badges:**
```
☐ DAY 2 READY           ☐ ML INITIATE           ☐ MLOPS ENGINEER
☐ QUIZ WARRIOR          ☐ GENERATIVE CREATOR    ☐ CERTIFIED CONTENDER
☐ CLEAN CLOUD
```

**Total Badges: ___ / 16**

---

### ✏️ My Biggest Takeaways

```
From Day 1:
1. ____________________________________________
2. ____________________________________________
3. ____________________________________________

From Day 2:
1. ____________________________________________
2. ____________________________________________
3. ____________________________________________
```

---

### 🚀 My Next 30 Days Action Plan

```
Week 1: ______________________________________
  (e.g., Complete AWS Cloud Practitioner free course)

Week 2: ______________________________________
  (e.g., Re-do the S3 + EC2 labs on my own)

Week 3: ______________________________________
  (e.g., Build a PartyRock app and share it)

Week 4: ______________________________________
  (e.g., Take a practice exam on Skill Builder)
```

---

### 🌐 Stay Connected with AWS SBG DBIT

| Platform | Link |
|---|---|
| 📸 Instagram | https://www.instagram.com/awssbg_dbit/ |
| 💼 LinkedIn | https://www.linkedin.com/company/aws-sbg-dbit/ |
| 📢 WhatsApp Channel | https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X |
| 🤝 Meetup | https://www.meetup.com/aws-sbg-at-don-bosco-institute-of-technology-bangalore/ |
| 🌐 Website | https://awsevents.dbit.edu.in/ |

---

### 📌 Quick Reference Links

| Resource | URL |
|---|---|
| AWS Console | https://console.aws.amazon.com |
| AWS Builder Center | https://builder.aws.com |
| AWS Skill Builder | https://skillbuilder.aws |
| PartyRock | https://partyrock.aws |
| AWS Certifications | https://aws.amazon.com/certification |
| Register for Events | https://awsevents.dbit.edu.in/departments/aiml |

---

```
╔══════════════════════════════════════════════════════════╗
║                                                          ║
║   Congratulations, Builder! 🎉                           ║
║                                                          ║
║   You have completed the AWS Builders Lab.               ║
║   The cloud is yours to explore.                         ║
║                                                          ║
║   Build. Deploy. Automate. Innovate with AWS. 🚀         ║
║                                                          ║
╚══════════════════════════════════════════════════════════╝
```

---

*AWS Builders Lab Participant Handbook*
*HexaVerse CloudFest '26 | AWS Student Builder Group – DBIT*
*Department of AI & ML, Don Bosco Institute of Technology, Bengaluru*
