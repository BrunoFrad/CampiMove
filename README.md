# CampiMove

CampiMove is a campus mobility application designed to improve transportation for students, teachers, and staff at CEFET. The platform offers a variety of services to make navigating the campus faster, safer, and more convenient.

## About the Project

Built with Next.js, React, ShadCN UI, and Tailwind CSS, CampiMove provides a modern and responsive user experience. Key features include:

- **Intercampus Bus Tracking**: Real-time location of the campus shuttle.
- **Ride Sharing**: A marketplace for carpools, bikes, and scooters offered by fellow users.
- **Route Discovery**: Find the best routes to get around campus.
- **User Roles**: Differentiated experiences for students, teachers, and motorists.
- **Rating System**: Rate and review rides to maintain a high-quality community.
- **Secure and Integrated**: Designed for safe use within the campus community.

## Getting Started

Follow these steps to get the project running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer recommended)
- npm or a compatible package manager

### Installation

1.  **Install dependencies:**
    Open your terminal in the project's root directory and run the following command to install all the necessary packages:

    ```bash
    npm install
    ```

2.  **Run the development server:**
    Once the installation is complete, you can start the development server:

    ```bash
    npm run dev
    ```

    The application will be available at [http://localhost:9002](http://localhost:9002).

## Directory Structure

The project follows a structure that separates concerns and makes it easy to locate files. Here is an overview of the main directories:

```
.
├── src
│   ├── app/                # Application pages (Next.js App Router)
│   │   ├── dashboard/      # User and motorist dashboard pages
│   │   ├── (auth)/         # Authentication-related pages (login, register, etc.)
│   │   └── page.tsx        # Landing page
│   │
│   ├── components/         # Reusable React components
│   │   ├── landing/        # Components specific to the landing page
│   │   ├── dashboard/      # Components used across dashboard pages
│   │   └── ui/             # Core UI components from ShadCN
│   │
│   ├── lib/                # Utility functions and shared libraries
│   │
│   └── hooks/              # Custom React hooks
│
├── public/                 # Static assets (images, fonts, etc.)
│
└── tailwind.config.ts      # Tailwind CSS configuration
```

-   **`src/app/`**: Contains all the application's routes and pages, following the Next.js App Router paradigm. Each folder represents a URL segment.
-   **`src/components/`**: Home to all reusable components. They are further organized into `landing`, `dashboard`, and `ui` for clarity.
-   **`src/lib/`**: Includes helper functions, utility classes (`cn` for class names), and placeholder data.
-   **`src/hooks/`**: Stores custom React hooks, such as `useToast` for displaying notifications.
-   **`public/`**: For static files that don't need to be processed by the build system.
-   **`tailwind.config.ts`**: The configuration file for Tailwind CSS, where you can customize the design system.
