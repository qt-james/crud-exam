# CRUD Application - Junior Frontend Developer Onboarding

## Overview

This is the CRUD re-examination for Junior Frontend Developers. This is the final task of the onboarding process, by which juniors are expected to develop a CRUD application that follows the coding standards of the company.

## Technical Specifications

### Required Technologies

- **Node Version**: v22.16
- **Next.js**: Pages Router v15.3.4 or @latest
- **Material UI**: v7.1.2 or @latest
- **Formik**: v2
- **TypeScript**: Latest version

### Design Inspiration

- [Figma Design - Crud-Operations (Community)](https://www.figma.com/community)

### API & Testing

- **API Endpoint**: https://react-testing-server.onrender.com/api/v1
- **Postman Workspace**: [Testing Server Workspace](https://grey-equinox-831930.postman.co/workspace/testing-server~f2e4272c-6b2c-4860-8b9a-ac1e6255cd12)

## Features & Acceptance Criteria

### ✅ Semantic Structure

- Correctly applied semantic HTML structure
- Proper semantics for links, headings, buttons, and images

### ✅ Component Architecture

- Modular and reusable components (Modals, Buttons, etc.)
- Clean component structure and organization

### ✅ Responsive Design

- Layout responsive on all screen sizes
- Mobile-first approach

### ✅ Authentication System

- **Account Creation**: User registration functionality
- **Login Process**: User authentication with token storage
- **Token Management**: Secure token storage in cookies
- **Authentication Provider**: Centralized auth state management
- **Route Protection**: Private route guards
- **Logout**: Token cleanup and redirection
- **Session Management**: Handle expired token scenarios with proper messaging

### ✅ CRUD Operations

Complete **CREATE, READ, UPDATE, DELETE** functionality for posts with:

- Form validation
- Error handling
- Loading states
- Success feedback

## Development Setup

### Prerequisites

```bash
# Ensure you have the correct Node version
node --version  # Should be v22.16
```

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd CRUD

# Install dependencies
npm install

# Start development server
npm run dev
```

### Environment Setup

Create a `.env.local` file with necessary environment variables:

```env
NEXT_PUBLIC_API_URL=https://react-testing-server.onrender.com/api/v1
```

## Project Structure

```
CRUD/
├── components/          # Reusable UI components
├── pages/              # Next.js pages (using Pages Router)
├── apis/               # API integration functions
├── modules/            # Feature-specific modules
├── providers/          # Context providers (Auth, Theme)
├── utils/              # Utility functions
├── hooks/              # Custom React hooks
├── types/              # TypeScript type definitions
└── styles/             # Global styles and theme
```

## Development Strategy

### Approach

This project follows a **bite-sized development approach** rather than building everything at once. Each feature is broken down into manageable tasks to ensure proper understanding and implementation.

### Task Breakdown

#### Phase 1: Project Setup

- [ ] Setup Next.js with TypeScript
- [ ] Configure Material UI
- [ ] Add `.nvmrc` file for Node version management
- [ ] Organize project folder structure
- [ ] Setup MUI Theme Provider with custom theme

#### Phase 2: Routing & Layout

- [ ] Prepare application routes (login, signup, posts)
- [ ] Create base Page component
- [ ] Implement Page Header
- [ ] Create authenticated Page Sidebar

#### Phase 3: API Configuration

- [ ] Setup Axios configuration with base URL and interceptors
- [ ] Create HTTP/fetcher utility functions
- [ ] Implement API functions in dedicated folder

#### Phase 4: Authentication

- [ ] Initialize AuthProvider with cookie management
- [ ] Create reusable authentication hook
- [ ] Build reusable card component for auth forms
- [ ] Implement Signup/Login UI with validation
- [ ] Integrate authentication APIs

#### Phase 5: CRUD Operations

- [ ] Design CRUD UI components (tables, modals, forms)
- [ ] Add form validation for all operations
- [ ] Create custom hooks for each CRUD operation
- [ ] Integrate CRUD APIs
- [ ] Implement pagination and filtering

#### Phase 6: Error Handling & Polish

- [ ] Add comprehensive error handling
- [ ] Implement loading states
- [ ] Add success/error notifications
- [ ] Final testing and bug fixes

## Key Features Implementation

### Authentication Flow

1. User registration with form validation
2. Login with credential verification
3. Token storage in secure cookies
4. Automatic token refresh handling
5. Protected route navigation
6. Session expiration handling

### CRUD Operations

1. **Create**: Add new posts with validation
2. **Read**: Display posts with pagination
3. **Update**: Edit existing posts
4. **Delete**: Remove posts with confirmation

### Error Handling

- Token expiration detection
- Automatic logout and redirect
- User-friendly error messages
- Network error handling

## Contributing

This project follows company coding standards. Please ensure:

- Code is properly typed with TypeScript
- Components are modular and reusable
- Responsive design principles are followed
- Authentication flow is properly implemented
- All CRUD operations are thoroughly tested

## Development Notes

- Focus on understanding each technology stack before implementation
- Break down complex features into smaller, manageable tasks
- Prioritize code quality and reusability
- Ensure proper error handling and user experience
- Test authentication and CRUD operations thoroughly

---

**Author**: @Taeki Kim  
**Purpose**: Junior Frontend Developer Onboarding Final Task
