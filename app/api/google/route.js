export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { token } = req.body;

  if (!token) {
    return res.status(400).json({ success: false, message: 'No token provided' });
  }

  try {
    const verifyResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`
    });

    const verificationData = await verifyResponse.json();
    
    if (verificationData.success) {
      return res.status(200).json({ success: true });
    } else {
      return res.status(400).json({ 
        success: false, 
        message: 'reCAPTCHA verification failed',
        errors: verificationData['error-codes']
      });
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Error verifying reCAPTCHA' 
    });
  }
}