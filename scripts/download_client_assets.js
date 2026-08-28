const fs = require('fs');
const https = require('https');
const path = require('path');

const targetDir = path.join(__dirname, '../public/images/client');
fs.mkdirSync(targetDir, { recursive: true });

const clientProfileUrl = 'https://scontent.fjnb1-1.fna.fbcdn.net/v/t39.30808-1/337496093_542644897985580_7344009671573345525_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s720x720&_nc_cat=105&ccb=1-7&_nc_sid=3ab345&_nc_ohc=iJmJL2Uxrp4Q7kNvwFB3KK4&_nc_oc=Adp_AB3I1AK_dP36D1FD5fnHILM0KO8vizN-ntBz4kk6c0eF77iLCLAaHPofyXU2tYs&_nc_zt=24&_nc_ht=scontent.fjnb1-1.fna&_nc_gid=-qzvB2fbhAHQ79LXlgXo7w&_nc_ss=7f20f&oh=00_AQEWqjvSljdov7VApRo1s02XIJrtPa2xobEB7tHj6kDgFQ&oe=6A970E9B';

const downloadFile = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Saved client asset to ${dest}`);
          resolve(true);
        });
      } else {
        console.error(`Failed to download ${url}: status code ${response.statusCode}`);
        file.close();
        fs.unlinkSync(dest);
        resolve(false);
      }
    }).on('error', (err) => {
      fs.unlinkSync(dest);
      reject(err);
    });
  });
};

downloadFile(clientProfileUrl, path.join(targetDir, 'client_profile.jpg'));
