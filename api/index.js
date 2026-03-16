const express = require('express');
const app = express();

app.get('/api', (req, res) => {
  // كود الـ HTML الذي سيظهر للمستخدم
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="ar" dir="rtl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Vercel Backend</title>
        <style>
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #0f172a, #1e293b);
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .card {
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 2rem;
                border-radius: 20px;
                text-align: center;
                box-shadow: 0 10px 30px rgba(0,0,0,0.5);
            }
            h1 { color: #38bdf8; margin-bottom: 0.5rem; }
            p { color: #94a3b8; }
            .badge {
                display: inline-block;
                background: #0ea5e9;
                padding: 5px 12px;
                border-radius: 15px;
                font-size: 0.8rem;
                margin: 5px;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>مرحباً بك في الباك-أند!</h1>
            <p>هذه الصفحة يتم إنشاؤها ديناميكياً بواسطة Express على Vercel.</p>
            <div>
                <span class="badge">Node.js</span>
                <span class="badge">Express</span>
                <span class="badge">Serverless</span>
            </div>
            <p style="font-size: 0.7rem; margin-top: 20px;">التوقيت الحالي: ${new Date().toLocaleString('ar-EG')}</p>
        </div>
    </body>
    </html>
  `;

  res.send(htmlContent);
});

// ملاحظة لـ Vercel: تأكد من تصدير التطبيق
module.exports = app;
