🚀 Progress Tracker App
=======================

A modern, full-stack progress tracker application to help you monitor learning goals for books, presentations, or any page-based material. It features a fast, responsive frontend with drag-and-drop reordering, and a robust backend that syncs your progress to a cloud database.

> **Note:** The version running in this canvas uses your browser's localStorage for demonstration purposes. The instructions below are for setting up the full-stack, cloud-connected version of the project.

### ✨ Key Features

*   **Full CRUD Functionality:** Create, read, update, and delete your progress items.
    
*   **Persistent Cloud Storage:** Your data is safely stored in a PostgreSQL database hosted on **Neon**.
    
*   **Drag-and-Drop Reordering:** Easily organize your task list by dragging cards to their desired position.
    
*   **Real-time Sync Indicator:** Get instant visual feedback when your changes are being saved to the cloud.
    
*   **Dynamic Progress Bars:** Visually track your completion percentage for each item.
    
*   **Graceful Error Handling:** Receive clear feedback if there's a network issue.
    
*   **One-Time Data Migration:** Includes a script to seamlessly migrate existing data from local storage to the database on first load.
    

### 🛠️ Tech Stack

*   **Framework:** Next.js (App Router)
    
*   **Styling:** Tailwind CSS
    
*   **State Management:** Zustand
    
*   **Drag & Drop:** dnd-kit
    
*   **ORM:** Prisma
    
*   **Database:** PostgreSQL on Neon
    
*   **Deployment:** Netlify
    

### 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

#### **Prerequisites**

You'll need Node.js (version 18 or later) and a package manager like npm or yarn.

#### **1\. Clone the Repository**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   git clone https://github.com/your-username/your-repo-name.git  cd your-repo-name   `

#### **2\. Install Dependencies**

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm install   `

#### **3\. Set Up Environment Variables**

You'll need a PostgreSQL database. This project is configured to use a free database from Neon.

1.  Create a .env file in the root of the project.
    
2.  Sign up for a free Neon account and create a new project.
    
3.  Copy the **Connection String** for your database.
    
4.  \# .envDATABASE\_URL="postgresql://user:password@ep-divine-shape-123456.us-east-2.aws.neon.tech/dbname?sslmode=require"
    

#### **4\. Sync the Database Schema**

Run the following command to create the ProgressItem table in your Neon database based on the Prisma schema.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npx prisma db push   `

#### **5\. Run the Development Server**

You're all set! Start the development server.

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   npm run dev   `

Open http://localhost:3000 with your browser to see the result.

### 🚀 Deployment

This project is set up for easy deployment to **Netlify**.

1.  Push your code to a Git repository (GitHub, GitLab, etc.).
    
2.  Import the repository into Netlify.
    
3.  Netlify will automatically detect the Next.js settings from the netlify.toml file.
    
4.  **Crucially**, add your DATABASE\_URL as an environment variable in the Netlify UI under **Site configuration > Build & deploy > Environment variables**.
    
5.  Deploy!
    

### ⚠️ Managing Database Migrations

Database schema changes should be managed deliberately and separately from application deployments.

**Do not** add prisma db push to your build command. Instead, follow this workflow when you need to change the schema:

1.  **Change Locally**: Modify your prisma/schema.prisma file.
    
2.  **Connect to Production**: Ensure your local .env file points to your live Neon database.
    
3.  **Run db push Locally**: From your local terminal, run npx prisma db push. This safely applies the changes to your live database.
    
4.  **Commit and Deploy**: Commit the updated prisma/schema.prisma file and push it to your Git repository. This will trigger a new Netlify deploy of your app, which will now work with the updated database schema.
    

### 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.