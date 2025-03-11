# Psychologists.Services

## Description  
**Psychologists.Services** is an application for a company that offers psychological services.  

[Technical documentation and project mockups](https://docs.google.com/document/d/1PrTxBn6HQbb0Oz17g5_zvyLGIOZg0TIP3HPaEEp6ZLs/edit?tab=t.0)  

The application consists of three pages:

### Home Page  
- Displays the site’s header, company slogan, and a **Call-to-Action** button that redirects users to the **Psychologists** page.  
- **Firebase Authentication** allows users to sign up and log in.  

### Psychologists Page  
- Shows a list of psychologists that users can **sort** in various ways.  
- Logged-in users can **add/remove** psychologists from their **favorites** list.  
- Clicking the **"Read more"** button expands a psychologist’s card with **detailed information** and **client reviews**.  
- Users can **book an appointment** with a psychologist using the **"Make an appointment"** button. The request is stored in the **Firebase Database**.  

### Favorites Page *(Private Page)*  
- Displays the list of psychologists the user has added to **favorites**.  

## Live Demo  
[Psychologists.Services App](https://psychologists-services-six.vercel.app/)  

## Technologies Used  
- **React**  
- **Redux Toolkit**  
- **React Hook Form**  
- **Firebase**  
- **Axios**  
- **React Hot Toast**  
- **React Router**  
- **React Spinners**  
- **React Modal**  
- **Redux Persist**  
- **React Helmet Async**  
- **Yup**  
- **clsx**  
