$destDir = "d:\Projects\wandi\public\images\client"
if (!(Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Force -Path $destDir | Out-Null
}

$url = "https://scontent.fjnb1-1.fna.fbcdn.net/v/t39.30808-1/337496093_542644897985580_7344009671573345525_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s720x720&_nc_cat=105&ccb=1-7&_nc_sid=3ab345&_nc_ohc=iJmJL2Uxrp4Q7kNvwFB3KK4&_nc_oc=Adp_AB3I1AK_dP36D1FD5fnHILM0KO8vizN-ntBz4kk6c0eF77iLCLAaHPofyXU2tYs&_nc_zt=24&_nc_ht=scontent.fjnb1-1.fna&_nc_gid=-qzvB2fbhAHQ79LXlgXo7w&_nc_ss=7f20f&oh=00_AQEWqjvSljdov7VApRo1s02XIJrtPa2xobEB7tHj6kDgFQ&oe=6A970E9B"
$dest = Join-Path $destDir "client_logo.jpg"

Write-Host "Attempting download of client profile image..."
try {
    Invoke-WebRequest -Uri $url -OutFile $dest -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" -TimeoutSec 30
    Write-Host "SUCCESS: Saved to $dest (Size: $((Get-Item $dest).Length) bytes)"
} catch {
    Write-Host "Download failed: $($_.Exception.Message)"
}
