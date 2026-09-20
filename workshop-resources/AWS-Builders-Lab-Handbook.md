# ☁️ AWS Builders Lab — Complete Workshop Handbook

**HexaVerse CloudFest '26**
**Organized by:** Department of Artificial Intelligence & Machine Learning, Don Bosco Institute of Technology (DBIT), Bengaluru
**In association with:** AWS Student Builder Group – DBIT

---

> 📌 **This handbook is your complete guide from Day 1 to Day 2.**
> Follow it step by step. Every session, concept, and hands-on activity is covered here.
> No prior cloud experience is needed — this is written for absolute beginners.

---

## 📋 Table of Contents

1. [Before You Arrive — Prerequisites](#prerequisites)
2. [Day 1 — Schedule Overview](#day1-schedule)
3. [Day 1 — Session 1: Welcome & Intro to AWS SBG DBIT](#session-welcome)
4. [Day 1 — Session 2: Icebreaker & Settle-In](#session-icebreaker)
5. [Day 1 — Session 3: History of Cloud & AWS](#session-history)
6. [Day 1 — Session 4: AWS Builder Center Resource](#session-builder-center)
7. [Day 1 — Session 5: Hands-On — IAM, EC2, and S3](#session-hands-on-day1)
   - [5A. AWS IAM — Create a User with Console Access](#iam-setup)
   - [5B. Amazon S3 — Host a Static Website](#s3-setup)
   - [5C. Amazon EC2 — Launch a Virtual Machine](#ec2-setup)
8. [Day 1 — Session 6: AWS Bedrock Overview](#session-bedrock)
9. [Day 1 — Session 7: Resource Teardown](#session-teardown-day1)
10. [Day 2 — Schedule Overview](#day2-schedule)
11. [Day 2 — Session 1: Recap & Day 1 Highlights](#session-recap)
12. [Day 2 — Session 2: SageMaker Canvas](#session-sagemaker)
13. [Day 2 — Session 3: Hands-On MLOps Pipeline](#session-mlops)
14. [Day 2 — Session 4: PartyRock Walkthrough](#session-partyrock)
15. [Day 2 — Session 5: AWS Certifications & Career Guidance](#session-certifications)
16. [Day 2 — Session 6: Resource Teardown & Clean-Up](#session-teardown-day2)
17. [Community & Social Links](#community)
18. [Quick Reference — Important Links](#quick-reference)

---

<a name="prerequisites"></a>
## ✅ Before You Arrive — Prerequisites

Before attending the workshop, make sure you have the following ready:

| Requirement | Details |
|---|---|
| 💻 Laptop | Any operating system (Windows, macOS, Linux) |
| 🔌 Laptop Charger | Full charge recommended |
| 🌐 Stable Internet | Required for all hands-on sessions |
| ☁️ AWS Account | Must be created and verified **before** arriving |

### How to Create Your AWS Account (If You Haven't Already)

1. Go to **https://aws.amazon.com**
2. Click **Create an AWS Account**
3. Enter your email address and choose an account name
4. Enter your payment details *(a temporary $1 hold may appear — it will be reversed)*
5. Complete the phone/email verification
6. Select the **Free Tier** plan
7. Sign in to confirm your account works at **https://console.aws.amazon.com**

> ⚠️ **Important:** Do NOT create your AWS account on the day of the workshop. On-the-spot account creation may delay your participation in hands-on activities.

---

<a name="day1-schedule"></a>
## 📅 Day 1 — Schedule Overview

**Date:** 21 September 2026
**Venue:** MBA Seminar Hall, DBIT Bengaluru
**Time:** 11:15 AM – 3:00 PM

| Time | Duration | Session |
|---|---|---|
| 11:15 AM – 11:45 AM | 30 mins | Welcome & Intro to AWS SBG DBIT |
| 11:45 AM – 11:55 AM | 10 mins | Icebreaker & Settle-In |
| 11:55 AM – 12:10 PM | 15 mins | History of Cloud & AWS |
| 12:10 PM – 12:20 PM | 10 mins | AWS Builder Center Resource |
| 12:20 PM – 01:15 PM | 55 mins | Hands-On: IAM, EC2, and S3 |
| 01:15 PM – 01:45 PM | 30 mins | Lunch Break |
| 02:00 PM – 02:15 PM | 15 mins | AWS Bedrock Overview |
| 02:15 PM – 02:25 PM | 10 mins | Resource Teardown |
| 02:20 PM – 02:30 PM | 10 mins | Feedback Session |
| 02:30 PM – 02:50 PM | 20 mins | Live Quiz & Prize Distribution |
| 02:50 PM – 03:00 PM | 10 mins | Vote of Thanks, Teaser & Photo |

---

<a name="session-welcome"></a>
## 🎙️ Day 1 — Session 1: Welcome & Intro to AWS SBG DBIT
**Time:** 11:15 AM – 11:45 AM | **Duration:** 30 mins

### What This Session Is About

This session introduces you to the **AWS Student Builder Group (SBG) – DBIT**, the community organizing this workshop. You will understand who we are, what we do, and how this community can help you grow as a cloud and AI/ML developer.

### Key Points

- **AWS Student Builder Group – DBIT** is a student-driven community within DBIT focused on cloud technologies, AI, and machine learning.
- The group is a collaboration between AWS and the **Artificial Intelligence & Machine Learning Department** of DBIT.
- The community's mission: *encourage students to learn, build, experiment, and share knowledge*.
- Members participate in workshops, hackathons, technical events, and peer learning sessions.
- AWS skills support academic projects, internships, and career opportunities.

### What to Expect Over Two Days

- **Day 1:** Cloud fundamentals, core AWS services (IAM, EC2, S3), and an introduction to Generative AI (Bedrock)
- **Day 2:** MLOps, SageMaker Canvas, PartyRock, and AWS Certification guidance

> 💬 *"This workshop is your opportunity to move beyond theory and start building real solutions on the cloud."*

---

<a name="session-icebreaker"></a>
## 🤝 Day 1 — Session 2: Icebreaker & Settle-In
**Time:** 11:45 AM – 11:55 AM | **Duration:** 10 mins

### Purpose

This quick session helps everyone get comfortable, connect with fellow participants, and set the collaborative tone for the workshop.

### Activity: Cloud Connection Icebreaker

Introduce yourself briefly by sharing:

1. Your **name** and **semester/section**
2. Your current **technical interests**
3. Whether you have used **AWS or any cloud platform** before
4. **One thing** you hope to build or learn during this workshop

> 💬 *Bonus question: "If you could build one technology solution to solve a problem on your campus — what would it be?"*

---

<a name="session-history"></a>
## 🕐 Day 1 — Session 3: History of Cloud & AWS
**Time:** 11:55 AM – 12:10 PM | **Duration:** 15 mins

### Part 1 — Before Cloud Computing

Before cloud computing existed, organizations had to:

- Purchase and maintain **physical servers** and **data centers**
- Invest heavily upfront in hardware
- Dedicate teams for infrastructure maintenance
- Plan capacity months in advance
- Over-provision to handle peak traffic (wasted resources during low demand)

**Example:** If your college wanted to host a student portal, it would need to buy servers, set up networking, and manage the hardware itself.

### Part 2 — Problems with Traditional Infrastructure

| Challenge | Explanation |
|---|---|
| High initial cost | Hardware requires significant investment before any development begins |
| Limited scalability | More users = buy more servers = slow process |
| Maintenance overhead | Dedicated teams needed for hardware, networking, and software |
| Resource wastage | Servers sit idle during low-traffic periods |
| Slow deployment | Provisioning new infrastructure takes days or weeks |

### Part 3 — What is Cloud Computing?

> **Cloud computing** is the on-demand delivery of IT resources — such as computing power, storage, and databases — over the internet, with pay-as-you-go pricing.

Instead of owning infrastructure, you **rent** it from a cloud provider and pay only for what you use.

**Simple Example:**
- **Traditional:** You buy a server for your event registration website, configure it, and hope you estimated traffic correctly.
- **Cloud:** You launch a virtual server on AWS, and it automatically scales up when 10,000 students register on deadline day.

### Part 4 — The Birth of AWS

Amazon Web Services grew out of Amazon's own experience building large-scale infrastructure for its e-commerce platform.

**AWS Timeline:**

```
Before 2006  →  Organizations manage their own physical data centers
2006         →  AWS launches, offering on-demand infrastructure services
2010s        →  Cloud grows: compute, storage, databases, networking, analytics
Today        →  Cloud supports ML, Generative AI, IoT, and intelligent applications
```

### Part 5 — Key AWS Services (Quick Overview)

| Service | What It Does |
|---|---|
| **Amazon EC2** | Virtual machines in the cloud — run any application |
| **Amazon S3** | Unlimited file/object storage — store images, videos, websites |
| **AWS IAM** | Manage who can access your AWS account and what they can do |
| **AWS Lambda** | Run code without managing servers |
| **Amazon Bedrock** | Access foundation AI models for Generative AI apps |
| **Amazon SageMaker** | Build, train, and deploy machine learning models |

> 💬 *As AIML students, cloud computing is important because modern AI/ML applications need scalable compute, data storage, and deployment infrastructure — all of which AWS provides.*

---

<a name="session-builder-center"></a>
## 🔗 Day 1 — Session 4: AWS Builder Center Resource
**Time:** 12:10 PM – 12:20 PM | **Duration:** 10 mins

### What is AWS Builder Center?

**AWS Builder Center** (builder.aws.com) is the official online home for the AWS builder community. It is where you continue learning after this workshop ends.

### What You Can Do There

| Section | What It Offers |
|---|---|
| **Learn** | Structured learning paths, training, and educational content |
| **Build** | Hands-on workshops, tutorials, and real project guides |
| **Community** | Connect with fellow builders, join discussions, follow contributors |
| **Toolbox** | Developer tools, SDKs, and programming resources for AWS |

### Getting Started — Do This Now

1. Open **https://builder.aws.com**
2. Sign in with your **AWS Builder ID** *(this is separate from your AWS Console account)*
3. Explore the **Learn** section — find a topic that interests you
4. Explore **Hands-On Workshops** — practice cloud skills for free
5. **Set a learning goal:** Pick one AWS service you want to master after this workshop

> 💡 **AWS Skill Builder** (linked from Builder Center) offers free and paid training courses, practice exams, and official certification prep.

---

<a name="session-hands-on-day1"></a>
## 🛠️ Day 1 — Session 5: Hands-On — IAM, EC2, and S3
**Time:** 12:20 PM – 01:15 PM | **Duration:** 55 mins

This is the main hands-on block of Day 1. You will work through three AWS services.

---

<a name="iam-setup"></a>
### 5A. AWS IAM — Create a User with Console Access

#### What is IAM?

**AWS Identity and Access Management (IAM)** is like a digital identity card and keycard system for your cloud environment.

- **Authentication:** Who can log into your AWS account
- **Authorization:** What services and resources they can access

#### Why Not Just Use the Root Account?

Your **Root account** (the one you created when signing up) has unlimited power over everything — including billing. It is dangerous to use daily.

**Best practice:** Create IAM users for any hands-on work. Grant only the permissions they need (**Least Privilege principle**).

#### Real-World Use Cases

- **Employee onboarding:** Each developer gets their own login with only the access they need
- **Student sandboxes:** A professor creates isolated accounts so students can experiment without touching billing
- **Automated apps:** Applications get secure keys to interact with AWS services programmatically

#### Step-by-Step: Create an IAM User

**Step 1 — Sign In as Root/Admin**

1. Open your browser and go to **https://console.aws.amazon.com**
2. Select **Root user**, enter your account email, click **Next**, and enter your password
3. You are now on the AWS Management Console dashboard

**Step 2 — Navigate to IAM**

1. Click the **search bar** at the top (or press `Alt + S`)
2. Type `IAM` and press Enter
3. Under **Services**, click **IAM** — *Manage access to AWS resources*

**Step 3 — Create a New User**

1. In the left navigation menu, click **Users** under *Access management*
2. Click the orange **Create user** button at the top right

**Step 4 — Specify User Details**

1. In the **User name** field, enter: `workshop-student` *(or any name you prefer)*
2. Under **AWS Management Console access**, check the box:
   `✅ Provide user access to the AWS Management Console - optional`
3. Under **Password**, select **Custom password**
4. Enter a strong temporary password
5. Keep **"Users must create a new password at next sign-in"** checked
6. Click **Next**

> ✅ *Checking "must create new password" ensures only the user knows their final password.*

**Step 5 — Set Permissions**

1. Under **Permissions options**, select **Attach policies directly**
2. In the search box, type: `AdministratorAccess`
3. Check the box next to **AdministratorAccess**
4. Click **Next**

> ⚠️ *AdministratorAccess gives full permissions — perfect for a learning sandbox, but never use this in production. Always restrict permissions to only what is needed.*

**Step 6 — Review and Create**

1. Review the **User details** and **Permissions summary**
2. Click **Create user**

**Step 7 — Save the Sign-In Details**

1. On the confirmation screen, click **Download .csv file** to save login credentials
2. Or click **Copy console sign-in URL**
3. Share the **Console sign-in URL**, **username**, and **temporary password** securely

#### Verification — Test the New User Login

1. Open a **Private/Incognito browser window**
2. Paste the **Console sign-in URL** into the address bar
3. Enter the username and temporary password → Click **Sign in**
4. AWS will prompt you to set a new password — do that
5. Confirm you land on the **AWS Management Console dashboard** ✅

#### Clean-Up (Anti-Billing)

IAM users are **free of charge**. But to remove access later:

1. Go back to **IAM → Users**
2. Select the checkbox next to the user
3. Click **Delete**
4. Type the username in the confirmation box → Click **Delete**

---

<a name="s3-setup"></a>
### 5B. Amazon S3 — Host a Static Website

#### What is Amazon S3?

**Amazon Simple Storage Service (S3)** is an object storage service that stores and retrieves any amount of data from anywhere on the web.

Think of it as an **infinite digital file system in the cloud** — upload files (HTML, images, videos, documents) and access them via unique web URLs.

#### Why is S3 Special for Students?

S3 introduces **Serverless Storage** — you don't need to configure virtual machines, manage disk drives, or install a web server to publish a website to the internet.

#### Real-World Use Cases

- **Static website hosting:** Portfolio sites, landing pages, documentation
- **Backup & disaster recovery:** Database dumps, system logs, archives
- **Data lakes:** Storing raw datasets for analytics with Amazon Athena
- **Media delivery:** E-commerce product images, app assets

#### Important Things to Know Before Starting

| Concept | Explanation |
|---|---|
| **Global bucket names** | S3 bucket names are globally unique — no two AWS accounts can share the same name |
| **Default public blocking** | AWS blocks all public access by default — you must explicitly enable it for websites |
| **Static only** | S3 serves HTML, CSS, JS, images — it cannot run Python, Node.js, or PHP backends |
| **HTTP only** | S3 website endpoints use HTTP by default. For HTTPS, use Amazon CloudFront |

#### Before You Start — Prepare These Files

Create a simple `index.html` on your computer:

```html
<!DOCTYPE html>
<html>
  <head><title>My AWS S3 Website</title></head>
  <body>
    <h1>Welcome to my S3 Hosted Website!</h1>
    <p>Hosted on Amazon S3 during AWS Builders Lab 2026.</p>
  </body>
</html>
```

Create an `error.html` on your computer:

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>404 - Page Not Found</h1>
  </body>
</html>
```

Also pick a **globally unique bucket name** (e.g., `my-student-website-dbit-2026`)

#### Step-by-Step: Create an S3 Bucket and Host a Website

**Phase A — Create the S3 Bucket**

1. In the AWS Console, click the **search bar** and type `S3`
2. Click **S3** — *Scalable Storage in the Cloud*
3. Click the orange **Create bucket** button

4. In **General configuration**:
   - **Bucket name:** Enter your unique name (e.g., `my-student-website-dbit-2026`)
   - **AWS Region:** Select `Asia Pacific (Mumbai) ap-south-1`

5. In **Object Ownership**: leave **ACLs disabled (recommended)** selected

6. In **Block Public Access settings**:
   - **Uncheck** `Block all public access`
   - Check the acknowledgement box: *"I acknowledge that current settings might result in this bucket becoming public"*

7. Leave **Bucket Versioning** as **Disable** and **Encryption** as default

8. Scroll down and click **Create bucket** ✅

**Phase B — Upload Your Web Files**

1. In the Buckets list, click your newly created bucket name
2. Make sure you are on the **Objects** tab
3. Click **Upload**
4. Click **Add files** and select your `index.html` and `error.html`
5. Click the orange **Upload** button
6. Wait for the green **"Upload succeeded"** banner → Click **Close** ✅

**Phase C — Enable Static Website Hosting**

1. Click the **Properties** tab at the top of your bucket
2. Scroll down to **Static website hosting** at the very bottom
3. Click **Edit**
4. Select **Enable**
5. Under **Hosting type**, select **Host a static website**
6. In **Index document**, type: `index.html`
7. In **Error document**, type: `error.html`
8. Click **Save changes** ✅

**Phase D — Add a Public Bucket Policy**

1. Click the **Permissions** tab
2. Scroll down to **Bucket policy** and click **Edit**
3. Paste the following policy (replace `YOUR-BUCKET-NAME` with your actual bucket name):

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

4. Click **Save changes** ✅

**Phase E — Access Your Website**

1. Go back to the **Properties** tab
2. Scroll to **Static website hosting**
3. Click the **Bucket website endpoint** URL
4. Your website is now live on the internet! 🎉

#### Clean-Up (Anti-Billing)

S3 charges for storage. To clean up:

1. Go to your bucket → Select all objects → Click **Delete**
2. Confirm deletion
3. Go back to the S3 dashboard → Select your bucket → Click **Delete bucket**
4. Type the bucket name in the confirmation box → Click **Delete bucket** ✅

---

<a name="ec2-setup"></a>
### 5C. Amazon EC2 — Launch a Virtual Machine

#### What is Amazon EC2?

**Amazon Elastic Compute Cloud (EC2)** provides virtual computing capacity in the cloud. Instead of buying a physical computer, you launch a virtual machine (called an **instance**) in seconds and pay only for the time it runs.

#### Real-World Use Cases

- Hosting web servers and APIs
- Running machine learning training jobs
- Testing applications in different environments
- Hosting databases and backend services

#### Step-by-Step: Launch an EC2 Instance

**Step 1 — Navigate to EC2**

1. In the AWS Console search bar, type `EC2`
2. Click **EC2** — *Virtual Servers in the Cloud*
3. Click **Launch instance**

**Step 2 — Configure Your Instance**

1. **Name:** Enter `my-first-instance`
2. **Application and OS Images (AMI):**
   - Select **Ubuntu Server 22.04 LTS (HVM), SSD Volume Type**
   - Architecture: **64-bit (x86)**
3. **Instance type:** Select **t2.micro** *(Free Tier eligible)*
4. **Key pair:** Click **Create new key pair**
   - Key pair name: `my-workshop-key`
   - Key pair type: **RSA**
   - Private key file format: **.pem**
   - Click **Create key pair** — the `.pem` file will download automatically
   > 🔑 **Keep this file safe.** You need it to SSH into your instance. You cannot download it again.

5. **Network settings:** Leave the default VPC and subnet. Ensure:
   - `✅ Allow SSH traffic from` → **My IP**
   - `✅ Allow HTTP traffic from the internet`

6. **Configure storage:** Leave default (8 GiB gp2)

7. Click **Launch instance** ✅

**Step 3 — View Your Running Instance**

1. Click **View all instances**
2. Wait until the **Instance state** shows `✅ Running`
3. Note your **Public IPv4 address** — you'll use this to connect

**Step 4 — Connect to Your Instance (Optional)**

Open your terminal and run:

```bash
chmod 400 my-workshop-key.pem
ssh -i my-workshop-key.pem ubuntu@<your-public-ip>
```

You are now inside your cloud virtual machine!

#### Clean-Up (Anti-Billing — IMPORTANT)

EC2 instances **charge by the hour**. Always stop or terminate when done:

1. Go to **EC2 → Instances**
2. Select your instance
3. Click **Instance state → Terminate instance**
4. Confirm termination ✅

> ⚠️ *Stopping an instance pauses billing for compute but storage still charges. Terminating permanently deletes the instance and stops all charges.*

---

<a name="session-bedrock"></a>
## 🤖 Day 1 — Session 6: AWS Bedrock Overview
**Time:** 02:00 PM – 02:15 PM | **Duration:** 15 mins

### What is Amazon Bedrock?

**Amazon Bedrock** is a fully managed service that provides access to high-performing foundation AI models (FMs) from leading AI companies — through a single AWS API.

You can use Bedrock to:
- Build **Generative AI applications** (chatbots, text summarizers, code generators)
- Access models from **Anthropic (Claude), Meta (Llama), Mistral, Amazon (Titan)** and more
- Experiment with AI without managing any model infrastructure

### Why Bedrock for Students?

| Traditional AI | With Amazon Bedrock |
|---|---|
| Train your own model (needs lots of data + compute) | Use pre-trained foundation models instantly |
| Complex infrastructure setup | Fully managed — just call an API |
| Expensive compute costs | Pay per API call |

### Key Concepts

- **Foundation Model (FM):** A large AI model pre-trained on massive datasets — ready to use for language, image, and code tasks
- **Prompt:** The instruction you give to the AI model
- **Inference:** The process of the model generating a response to your prompt
- **Knowledge Base:** Connect your own documents to Bedrock so the AI answers questions about your specific content

### Accessing Bedrock

1. In the AWS Console search bar, type `Bedrock`
2. Click **Amazon Bedrock**
3. Click **Get started**
4. Explore **Playgrounds** — test text generation, image generation, and chat directly in the browser

> 💡 *Bedrock is what powers PartyRock — the no-code AI app builder you'll explore on Day 2.*

---

<a name="session-teardown-day1"></a>
## 🧹 Day 1 — Session 7: Resource Teardown
**Time:** 02:15 PM – 02:25 PM | **Duration:** 10 mins

### Why Teardown Matters

AWS charges for resources that are **running or stored**, even when you are not actively using them. Always clean up after every session.

### Day 1 Teardown Checklist

| Resource | How to Delete | Risk if Left Running |
|---|---|---|
| EC2 Instance | EC2 → Instances → Terminate | Hourly charges |
| S3 Bucket | Delete all objects → Delete bucket | Storage charges |
| IAM User | IAM → Users → Delete | Security risk (not a billing risk) |

### Step-by-Step Teardown

**EC2:**
1. Go to **EC2 → Instances**
2. Select your instance → **Instance state → Terminate instance** → Confirm

**S3:**
1. Go to **S3**
2. Open your bucket → Select all files → **Delete** → Confirm
3. Back on S3 dashboard → Select bucket → **Delete bucket** → Type name → Confirm

**IAM (if needed):**
1. Go to **IAM → Users**
2. Select the user → **Delete** → Type username → Confirm

> ✅ *After teardown, verify no resources remain by checking your **Billing Dashboard** (search "Billing" in the console).*

---

<a name="day2-schedule"></a>
## 📅 Day 2 — Schedule Overview

**Date:** 22 September 2026
**Venue:** MBA Seminar Hall, DBIT Bengaluru
**Time:** 10:00 AM – 01:15 PM

| Time | Duration | Session |
|---|---|---|
| 10:00 AM – 10:10 AM | 10 mins | Settle-In & Buffer |
| 10:10 AM – 10:20 AM | 10 mins | Recap & Day 1 Highlights |
| 10:20 AM – 10:30 AM | 10 mins | SageMaker Canvas Introduction |
| 10:30 AM – 11:55 AM | 85 mins | Hands-On MLOps Deep Dive |
| 11:55 AM – 12:10 PM | 15 mins | The Ultimate Quiz Battle |
| 12:10 PM – 12:20 PM | 10 mins | PartyRock Walkthrough |
| 12:20 PM – 12:30 PM | 10 mins | Certification Prep |
| 12:30 PM – 12:45 PM | 15 mins | Resource Teardown & Clean-up |
| 12:45 PM – 12:55 PM | 10 mins | Feedback & Certificate Distribution |
| 12:55 PM – 01:10 PM | 15 mins | Q&A, Concluding Remarks & Group Photo |

---

<a name="session-recap"></a>
## 🔁 Day 2 — Session 1: Recap & Day 1 Highlights
**Time:** 10:10 AM – 10:20 AM | **Duration:** 10 mins

### Quick Refresher — What We Covered on Day 1

| Topic | Key Takeaway |
|---|---|
| Cloud Computing | On-demand IT resources over the internet, pay-as-you-go |
| AWS IAM | Create users with specific permissions; never use Root for daily tasks |
| Amazon S3 | Object storage; host static websites without managing servers |
| Amazon EC2 | Virtual machines in the cloud; pay per hour |
| Amazon Bedrock | Access foundation AI models via API for Generative AI apps |
| Resource Teardown | Always clean up to avoid unexpected charges |

---

<a name="session-sagemaker"></a>
## 🧠 Day 2 — Session 2: Amazon SageMaker Canvas
**Time:** 10:20 AM – 10:30 AM | **Duration:** 10 mins

### What is Amazon SageMaker Canvas?

**Amazon SageMaker Canvas** is a visual, no-code machine learning tool. It lets you build and deploy ML models **without writing a single line of code** by using a drag-and-drop interface.

### Who is it for?

- Business analysts and students who want ML insights without deep programming
- Developers who want to prototype ML models quickly
- Anyone exploring MLOps for the first time

### What Can You Build?

| Prediction Type | Example Use Case |
|---|---|
| Binary Classification | Will this customer churn? (Yes/No) |
| Multi-class Classification | Which product category does this item belong to? |
| Regression | What will the house price be? |
| Time-series Forecasting | What will sales be next month? |

### Key Concepts

- **Dataset:** The CSV file of historical data you upload to train the model
- **Target column:** The column Canvas will learn to predict
- **Quick Build:** Trains a working model in under 10 minutes
- **Standard Build:** Full AutoML tuning for higher accuracy (takes longer)
- **Feature Importance:** Shows which columns matter most for predictions
- **Model accuracy:** The percentage of correct predictions on test data

---

<a name="session-mlops"></a>
## 🔬 Day 2 — Session 3: Hands-On MLOps Pipeline
**Time:** 10:30 AM – 11:55 AM | **Duration:** 85 mins

### What is MLOps?

**MLOps (Machine Learning Operations)** is the practice of deploying, monitoring, and maintaining machine learning models in production — just like DevOps is for software.

Today's hands-on session uses **SageMaker Canvas** to walk through an end-to-end MLOps pipeline: from data to deployed predictions.

### Use Case: Customer Churn Prediction

We will predict whether a telecom customer will **churn (leave)** based on their usage patterns. This is one of the most common real-world ML use cases.

**What is Customer Churn?**
Churn means a customer stops using a service. Telecom companies lose millions when customers switch providers. Predicting churn early lets them take action to retain the customer.

### Step-by-Step: SageMaker Canvas MLOps Pipeline

**Step 1 — Access SageMaker Canvas**

1. In the AWS Console search bar, type `SageMaker`
2. Click **Amazon SageMaker**
3. In the left sidebar, under **Applications and IDEs**, click **Canvas**
4. Click **Open Canvas** *(first-time setup may take 1–2 minutes)*

**Step 2 — Import the Dataset**

1. In Canvas, click **Datasets** in the left sidebar
2. Click **Import data**
3. Select **Upload** and upload the customer churn CSV file provided by the facilitator

The CSV contains columns like:
- `State`, `Account_Length`, `Monthly_Charges`, `Cust_Service_Calls`
- `Churn` — this is the **target column** (True/False)

4. Once uploaded, click **Create dataset**

**Step 3 — Create a New Model**

1. Click **Models** in the left sidebar
2. Click **New model**
3. Give your model a name: `Customer-Churn-Predictor`
4. Select the dataset you just uploaded → Click **Select dataset**

**Step 4 — Configure the Prediction Target**

1. In the **Build** tab, under **Target column**, select `Churn`
2. Canvas automatically detects the problem type as:
   **Two-category prediction (Binary Classification)** ✅

**Step 5 — Build the Model**

1. Click **Validate data** to check for missing values or formatting errors
2. Click **Quick build**
   > *Quick build trains a functional model in under 10 minutes — perfect for the workshop.*
3. Wait while Canvas performs:
   - Data transformation
   - Feature selection
   - Algorithm training and evaluation

**Step 6 — Analyze Results**

Once training completes, Canvas opens the **Analyze** tab automatically.

Review the following:

| Metric | What It Means |
|---|---|
| **Model accuracy** | e.g., 94.2% — the model correctly predicts churn 94.2% of the time |
| **Column impact chart** | Shows which features matter most (e.g., `Cust_Service_Calls` may have highest impact) |

**Step 7 — Make Predictions**

1. Click **Predict** at the bottom right
2. Choose a prediction type:
   - **Single prediction:** Manually adjust column sliders to test individual customer scenarios
   - **Batch prediction:** Upload a new CSV of active customers to generate churn probability scores for all of them at once

Congratulations — you have just built and deployed an ML model! 🎉

### What Did You Just Do?

```
Raw Data (CSV)
     ↓
Data Import & Validation (Canvas)
     ↓
Automated Feature Engineering
     ↓
Model Training (AutoML)
     ↓
Model Evaluation (Accuracy, Feature Importance)
     ↓
Predictions (Single & Batch)
```

This is a complete **end-to-end MLOps pipeline** — from raw data to actionable predictions.

---

<a name="session-partyrock"></a>
## 🎉 Day 2 — Session 4: PartyRock Walkthrough
**Time:** 12:10 PM – 12:20 PM | **Duration:** 10 mins

### What is PartyRock?

**PartyRock** (https://partyrock.aws/) is a browser-based, code-free Generative AI playground powered by Amazon Bedrock. It lets anyone build multi-widget AI applications without writing code or needing an AWS account.

### Key Features

| Feature | Description |
|---|---|
| **Zero setup** | Log in with Google, Apple, or Amazon — no AWS account or credit card needed |
| **Visual builder** | Connect modular widgets: User Input, Text Generation, Image Generation, Chatbot |
| **Prompt chaining** | Reference one widget's output in another using `@WidgetName` syntax |
| **Model choice** | Select from Anthropic (Claude), Meta (Llama), Amazon (Titan) and more |
| **Instant sharing** | Publish your app via a public URL — others can use or remix it |

### What Can You Build?

- AI study assistant that answers questions about your notes
- Resume generator that creates a CV from bullet points
- Story generator based on user prompts
- Image captioning app
- Quiz generator from a topic

### Getting Started with PartyRock

1. Go to **https://partyrock.aws/**
2. Click **Sign in** — use your Google, Apple, or Amazon account
3. Click **Build your own app**
4. Describe your app idea in plain English (e.g., *"An app that generates study notes from a topic"*)
5. PartyRock generates a starting layout with widgets
6. Customize the widgets — add inputs, change models, chain outputs
7. Click **Publish** to share your app with a link

> 💡 *PartyRock is completely free for daily usage. It's a great way to experiment with Generative AI before building with the full Bedrock API.*

---

<a name="session-certifications"></a>
## 🏆 Day 2 — Session 5: AWS Certifications & Career Guidance
**Time:** 12:20 PM – 12:30 PM | **Duration:** 10 mins

### Why Get AWS Certified?

AWS certifications validate your cloud skills to employers. They demonstrate that you can design, build, and operate cloud solutions — making your resume stand out.

### Official AWS Certification Tracks

**Foundational Level** *(Start here as a beginner)*

| Certification | What It Validates |
|---|---|
| AWS Certified Cloud Practitioner (CLF-C02) | Overall foundational knowledge of AWS Cloud |
| AWS Certified AI Practitioner (AIF-C01) | AI, ML, and Generative AI concepts and use cases |

**Associate Level** *(After 6–12 months of hands-on experience)*

| Certification | What It Validates |
|---|---|
| AWS Certified Solutions Architect – Associate (SAA-C03) | Designing distributed systems using AWS Well-Architected Framework |
| AWS Certified Machine Learning Engineer – Associate (MLA-C02) | Implementing, deploying, and maintaining AI/ML solutions |
| AWS Certified Developer – Associate | Technical development skills on AWS |

**Professional Level** *(2+ years hands-on experience)*

| Certification | What It Validates |
|---|---|
| AWS Certified Solutions Architect – Professional (SAP-C02) | Advanced distributed application design at scale |
| AWS Certified DevOps Engineer – Professional (DOP-C02) | Provisioning, operating, and managing distributed systems |
| AWS Certified Generative AI Developer – Professional (AIP-C01) | Designing and deploying advanced AI solutions |

**Specialty Level**

| Certification | What It Validates |
|---|---|
| AWS Certified Security – Specialty (SCS-C03) | Securing AWS workloads and data |
| AWS Certified Advanced Networking – Specialty (ANS-C01) | Designing AWS and hybrid network architectures |

### Recommended Path for AIML Students

```
Start →  Cloud Practitioner (CLF-C02)
              ↓
         AI Practitioner (AIF-C01)
              ↓
         ML Engineer Associate (MLA-C02)
              ↓
         Solutions Architect Associate (SAA-C03)
```

### Where to Prepare (Free Resources)

- **AWS Skill Builder:** https://skillbuilder.aws — Free digital training, practice exams, and learning paths
- **AWS Builder Center:** https://builder.aws.com — Community, tutorials, and workshops
- **AWS Documentation:** https://docs.aws.amazon.com — Official service documentation

> 💡 *AWS sometimes offers free exam vouchers through student programs and events. Stay connected with AWS SBG DBIT for these opportunities.*

---

<a name="session-teardown-day2"></a>
## 🧹 Day 2 — Session 6: Resource Teardown & Clean-Up
**Time:** 12:30 PM – 12:45 PM | **Duration:** 15 mins

### Day 2 Teardown Checklist

| Resource | How to Delete | Risk if Left Running |
|---|---|---|
| SageMaker Canvas workspace | Log out of Canvas; verify app shows "Stopped" | Hourly session charges |
| SageMaker Domain | Delete user profile → Delete domain (if created for lab) | Ongoing charges |
| Any EC2 instances | EC2 → Terminate instance | Hourly charges |
| Any S3 buckets | Delete objects → Delete bucket | Storage charges |

### Step-by-Step: Stop SageMaker Canvas

1. In the Canvas workspace, click the **Account / Log out** icon in the bottom-left corner
2. Click **Sign out** — this terminates the active Canvas session
3. Return to **AWS Console → SageMaker → Domains**
4. Click your **Domain name** → Select your **User Profile**
5. Verify the Canvas app state shows `Stopped` ✅
6. *(Optional)* If you created a domain only for this lab:
   - Click **Delete user profile** → Confirm
   - Click **Delete domain** → Confirm

### Final Billing Check

After completing all teardowns:

1. Search for **Billing** in the AWS Console
2. Click **Bills** → Check the current month
3. Verify all charges are within the **Free Tier** limits
4. Check **Free Tier Usage** to see how much of your monthly allocation remains

> ✅ *If you see any unexpected charges, contact the workshop facilitators immediately.*

---

<a name="community"></a>
## 🌐 Join the AWS SBG DBIT Community

Stay connected after the workshop and continue learning:

| Platform | Link |
|---|---|
| 📸 Instagram | https://www.instagram.com/awssbg_dbit/ |
| 💼 LinkedIn | https://www.linkedin.com/company/aws-sbg-dbit/ |
| 📢 WhatsApp Channel | https://whatsapp.com/channel/0029Vb76rEYATRSlFR1mOg2X |
| 🤝 Meetup Community | https://www.meetup.com/aws-sbg-at-don-bosco-institute-of-technology-bangalore/ |
| 📘 Facebook | https://www.facebook.com/awssbg.dbit |
| ✖️ X (Twitter) | https://x.com/awssbg_dbit |
| 🌐 Official Website | https://awsevents.dbit.edu.in/ |
| 📝 Register for Events | https://awsevents.dbit.edu.in/departments/aiml |

---

<a name="quick-reference"></a>
## 📌 Quick Reference — Important Links

| Resource | URL |
|---|---|
| AWS Console | https://console.aws.amazon.com |
| AWS Free Tier | https://aws.amazon.com/free |
| AWS Builder Center | https://builder.aws.com |
| AWS Skill Builder | https://skillbuilder.aws |
| Amazon SageMaker Canvas | https://console.aws.amazon.com/sagemaker |
| Amazon Bedrock | https://console.aws.amazon.com/bedrock |
| PartyRock | https://partyrock.aws |
| AWS Certifications | https://aws.amazon.com/certification |
| AWS Documentation | https://docs.aws.amazon.com |

---

## 🎉 You Made It!

Congratulations on completing the **AWS Builders Lab** at HexaVerse CloudFest '26.

Over these two days you have:
- ✅ Understood cloud computing fundamentals and the history of AWS
- ✅ Created and managed IAM users with secure access
- ✅ Hosted a static website on Amazon S3
- ✅ Launched a virtual machine on Amazon EC2
- ✅ Explored Generative AI with Amazon Bedrock
- ✅ Built a machine learning model with SageMaker Canvas
- ✅ Experimented with no-code AI on PartyRock
- ✅ Learned how to safely clean up cloud resources

> **Build. Deploy. Automate. Innovate with AWS.**

Keep building. The cloud is yours to explore. 🚀

---

*Handbook prepared for AWS Builders Lab — HexaVerse CloudFest '26*
*AWS Student Builder Group – DBIT | Department of AI & ML, Don Bosco Institute of Technology, Bengaluru*
