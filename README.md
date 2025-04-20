# Trade Venture App

A trading platform for businesses to find partners and grow their business. 

## Prerequisites

- **Node.js** - Ensure you have Node.js installed. [Download Node.js here](https://nodejs.org/).
- **pnpm** - This project uses pnpm for package management. To install pnpm, run:
  
  ```bash
  npm install -g pnpm
  ```

## Getting Started

Follow these steps to run the project locally.

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone -b dev https://github.com/Ishara-Technology/trade-venture-web.git web
cd web
```

### 2. Install Dependencies

Use pnpm to install project dependencies:

```bash
pnpm install
```

### 3. Run Development Server

To start the development server, use the following command:

```bash
pnpm dev
```

This will start the Next.js development server, and you can view the app by navigating to [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production

To create an optimized production build, run:

```bash
pnpm build
```

### 5. Start Production Server

After building the project, you can start the production server with:

```bash
pnpm start
```


### 6. Environment Variables

This project requires environment variables, create a `.env.local` file in the root directory and add your variables there. For example:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

### 7. Start Storybook

To start Storybook, use the command:

```bash
pnpm storybook
```

This will start Storybook on [http://localhost:6006](http://localhost:6006). You can view and interact with your components there.

### 3. Build Storybook for Production

To generate a static build of Storybook, which you can deploy, run:

```bash
pnpm build-storybook
```

The static Storybook site will be generated in a `storybook-static` folder in the root of your project.

## Additional Notes

- **Stories Location**: By default, Storybook looks for files ending in `.stories.js` or `.stories.tsx` inside your components folder. Make sure your component stories follow this naming convention.
- **Configuration**: You can configure Storybook in the `.storybook` directory. This includes adjusting Webpack settings, adding global decorators, and more.

Now you’re ready to develop and test your components in isolation using Storybook!
```
