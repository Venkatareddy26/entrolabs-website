Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\venka\OneDrive\Desktop\entrolabs-website\src\assets\logo-black-hd.png")
$w = $img.Width
$h = $img.Height
$d = $img.HorizontalResolution
$s = (Get-Item "c:\Users\venka\OneDrive\Desktop\entrolabs-website\src\assets\logo-black-hd.png").Length
Write-Host "Width: $w, Height: $h, DPI: $d, FileSize: $s bytes"
$img.Dispose()
