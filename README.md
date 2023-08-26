##  Authentication :
Authentication verifies who a user is, while authorization controls what a user can access. Next.js supports multiple authentication patterns, each designed for different use cases.

## Cookies Based Authentication :
Cookie-based authentication is a method of user authentication used in web applications. It relies on cookies to establish and maintain a user's authenticated session


#### Summary of Things that are Done in this Next js website :
<ol>
  <li> Authentication[ Done using Github ]</li>
  <li> Cookie-based authentication  </li>
</ol>

## Steps 1:
   ### Created a Next Application 
    npx create-next-app@latest
    cd [ app name that is created ]

## Step 2 :
   ### Installed Dependencies 
    eg: npm install next-auth
        npm install react-cookie

## STEP 3 : 
   ### Created .env.local directory 
   This was created to store the secreat key from github [ Or any other application eg: google ,facebook etc]
   In this I have used Github key 
   [ Github -> login -> settings -> developer mode -> Oauth key -> new (then fill the inputs and generate a key]
   
   ![Screenshot 2023-08-26 185338](https://github.com/amolj2003/twayam/assets/114354608/f9148385-ecda-455a-a083-8a6288cfb5e7)

## step 4 :
  ### Made Login page 

## Step 5 :
  ### Made Authentication Over Cookies 

### Login Before Authentication:
![Screenshot 2023-08-26 234150](https://github.com/amolj2003/twayam/assets/114354608/14aec6f0-e961-43c7-839a-0d08daf64a45)

### Logged In 
![Screenshot 2023-08-26 234125](https://github.com/amolj2003/twayam/assets/114354608/11d14885-fd81-4a45-9118-9221974d5e4d)


