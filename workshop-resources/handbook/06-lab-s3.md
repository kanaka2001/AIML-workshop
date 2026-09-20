# Chapter 06 — Hands-On Lab: Amazon S3 Static Website

**Day 1 | 12:40 PM – 01:00 PM | Part of the 55-min Core Lab**

---

## 🎯 What You Will Do

Create an S3 bucket, upload a web page, enable public hosting, and get your website live on the internet — without touching a single server.

---

## 🪣 What is Amazon S3?

**Amazon Simple Storage Service (S3)** stores files in the cloud and makes them accessible via a URL.

For web hosting, S3 means:
- No server to set up or manage
- No web server software to install
- Upload HTML files and they are instantly accessible online
- Pay only for the storage you use

> S3 can only host **static** content — HTML, CSS, JavaScript, images. It cannot run backend code like Python or Node.js.

---

## 📋 Prepare These Files on Your Laptop First

**Create `index.html`** — open a text editor and paste this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My AWS S3 Website</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 60px;
        background-color: #0f1117;
        color: #ffffff;
      }
      h1 { color: #FF9900; }
      p  { color: #cccccc; }
    </style>
  </head>
  <body>
    <h1>☁️ Hello from Amazon S3!</h1>
    <p>Hosted during AWS Builders Lab — HexaVerse CloudFest '26</p>
    <p>Built by: <strong>YOUR NAME HERE</strong></p>
  </body>
</html>
```

**Create `error.html`** — paste this:

```html
<!DOCTYPE html>
<html>
  <body style="font-family:Arial; text-align:center; padding:60px;">
    <h1>404 — Page Not Found</h1>
    <a href="index.html">← Go back home</a>
  </body>
</html>
```

**Choose your bucket name** — must be globally unique across all AWS accounts:

My bucket name: `my-dbit-website-__________` *(add your roll number)*

- [ ] ✅ index.html created and saved on my laptop
- [ ] ✅ error.html created and saved on my laptop
- [ ] ✅ Unique bucket name decided

---

## 👣 Step-by-Step

### Phase A — Create the S3 Bucket

```
AWS Console → Search: S3 → Click S3 → Click "Create bucket"
```

```
Bucket name  →  Enter your unique bucket name
AWS Region   →  Asia Pacific (Mumbai) ap-south-1
```

```
Object Ownership  →  Leave: ACLs disabled (recommended)
```

```
Block Public Access:
  UNCHECK ☐  "Block all public access"
  CHECK   ✅  "I acknowledge that current settings might result
               in this bucket and objects becoming public"
```

```
Bucket Versioning  →  Disable
Encryption         →  Leave default (SSE-S3)

→ Click "Create bucket"
```

- [ ] ✅ Bucket created

---

### Phase B — Upload Your Files

```
Click your bucket name in the list
→ Objects tab → Click "Upload"
→ Click "Add files"
→ Select: index.html and error.html from your laptop
→ Click "Upload"
→ Wait for the green "Upload succeeded" banner
→ Click "Close"
```

- [ ] ✅ Files uploaded

---

### Phase C — Enable Static Website Hosting

```
Click the "Properties" tab at the top of your bucket
→ Scroll to the very bottom → "Static website hosting" → Edit

Static website hosting  →  Enable
Hosting type            →  Host a static website
Index document          →  index.html
Error document          →  error.html

→ Click "Save changes"
```

- [ ] ✅ Website hosting enabled

---

### Phase D — Add a Public Bucket Policy

```
Click the "Permissions" tab
→ Scroll to "Bucket policy" → Click "Edit"
```

Paste this JSON — replace `YOUR-BUCKET-NAME` with your actual bucket name:

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

### Phase E — Visit Your Live Website

```
Properties tab → Scroll to "Static website hosting"
→ Click the Bucket website endpoint URL
```

**Your website is live on the internet!** 🎉

My website URL:
```
_______________________________________________
```

- [ ] ✅ Website is accessible in the browser

---

## 🧠 Reflection

```
What is one thing S3 website hosting cannot do that a
traditional server (like EC2) can?

→ _______________________________________________

What happens if two people try to create a bucket
with the same name?

→ _______________________________________________
```

---

## 🧹 Clean-Up (Do this at teardown)

```
Open bucket → Select all files → Delete → Confirm
S3 Dashboard → Select bucket → Delete bucket → Type name → Confirm
```

---

## ✅ Chapter Checklist

- [ ] S3 bucket created in Mumbai region
- [ ] index.html and error.html uploaded
- [ ] Static website hosting enabled
- [ ] Public bucket policy applied
- [ ] Website URL is working in my browser

---

## 🏆 Badge Unlocked

> **STATIC ARCHITECT 🪣** — You shipped a website without touching a single server.

---

> ✅ **Done? Move to the next chapter:**
> 👉 [Chapter 07 — Hands-On Lab: EC2 Virtual Machine](07-lab-ec2.md)
