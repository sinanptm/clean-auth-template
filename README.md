<div align="center">

# Full-Stack Authentication Template

**A production-ready authentication system built with clean architecture principles and modern technologies**

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/Node.js-22+-green.svg)](https://nodejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

</div>

---

## 📖 Overview

This comprehensive full-stack authentication template is designed with clean architecture principles, providing a solid foundation for building scalable web applications with robust user authentication and authorization systems.

**📚 Documentation**: [https://full-stack-clean-auth-template.vercel.app/](https://full-stack-clean-auth-template.vercel.app/)

<img src="https://github.com/user-attachments/assets/cbbfc5f3-c470-4426-a823-aaf796607203" alt="Application Preview" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

The template demonstrates modern web development practices with a focus on security, scalability, and maintainability. It includes comprehensive authentication flows, role-based access control, and production-ready deployment configurations.

---

<details>
<summary><strong>
📱 Application Screenshots
</strong></summary>

### Authentication Flow
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

**User Registration**
<img src="https://github.com/user-attachments/assets/a91bfc8b-ebf1-46f9-b783-1382f09489b3" alt="User Signup Page" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

**Forgot Password Modal**
<img src="https://github.com/user-attachments/assets/c427b1fd-53d6-4cff-a5c3-9633e3056716" alt="Forgot Password Popup" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

**Password Reset Email**
<img src="https://github.com/user-attachments/assets/b41320de-8cb2-4e5d-930b-061cfc608b1b" alt="Forgot Password Email" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

**OTP Verification**
<img src="https://github.com/user-attachments/assets/31797b3a-6ead-4d2c-a23a-549e907da59f" alt="OTP Verification Page" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

**OTP Email Verification**
<img src="https://github.com/user-attachments/assets/af435d9a-9c70-4083-948d-2927fb7e87ac" alt="OTP Verification Email" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

</div>

### User & Admin Interfaces
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin: 20px 0;">

**User Profile Dashboard**
<img src="https://github.com/user-attachments/assets/3c8aa0bb-f406-4e9a-8efa-eeda59fffbbc" alt="User Profile Page" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

**Admin Login**
<img src="https://github.com/user-attachments/assets/793bd7a9-5b01-4285-bbe0-a644fa6dffdb" alt="Admin Signin Page" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

**Admin Dashboard**
<img src="https://github.com/user-attachments/assets/c2e5edef-db7d-488b-8c2e-9c7c1d331f69" alt="Admin Dashboard" width="100%" style="border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

</div>

</details>

---
<details>
<summary><strong>🔄 Authentication Flow Diagram</strong></summary>

> **📋 Coming Soon**: Detailed authentication flow diagram will be added here to visualize the complete user authentication process, including email/password login, OAuth integration, OTP verification, and admin authentication flows.
>
> The diagram will illustrate:
> - User registration and login processes
> - Multi-factor authentication with OTP
> - OAuth integration with Google and GitHub
> - Admin authentication workflow
> - Token management and refresh cycles
> - Password reset functionality

</details>

<details>
<summary><strong>✨ Key Features</strong></summary>

### 🏗️ Architecture & Design
- **Clean Architecture** - Domain-driven design with clear separation of concerns
- **Modular Structure** - Easy to extend and maintain  
- **Framework Independence** - Core business logic is decoupled from frameworks
- **TypeScript First** - Full type safety across the entire stack

### 🔐 Authentication & Security
- **Multi-factor Authentication** - Email/Password with OTP verification
- **OAuth Integration** - Google and GitHub social login
- **Role-based Access Control** - User and admin roles with protected routes
- **JWT Token Management** - Secure access and refresh token implementation
- **Security Best Practices** - Rate limiting, CORS, bcrypt hashing

### ⚡ Modern Technology Stack
- **Frontend**: Next.js 15, React 19, Tailwind CSS, Shadcn UI
- **Backend**: Express.js 5, Node.js, TypeScript
- **Database**: MongoDB with Mongoose ODM
- **State Management**: Zustand + React Query
- **Authentication**: Firebase OAuth, JWT, Nodemailer

### 🚀 Production Ready
- **Scalable Architecture** - Built for enterprise-level applications
- **Comprehensive Testing** - Unit and integration tests included
- **Development Tools** - ESLint, Prettier, Hot reload
- **Deployment Ready** - Production-optimized builds
- **CI/CD Pipeline** - Automated testing, building, and quality checks

</details>

---

## 🛠️ Technology Stack

| Category | Technologies |
|----------|-------------|
| **Frontend** | Next.js 15, React 19, TypeScript, Tailwind CSS, Shadcn UI |
| **Backend** | Express.js 5, Node.js, TypeScript |
| **Database** | MongoDB, Mongoose ODM |
| **Authentication** | JWT, Firebase Auth, Nodemailer |
| **State Management** | Zustand, React Query |
| **Development** | ESLint, Prettier, Jest |
| **Security** | bcrypt, CORS, Rate Limiting, Joi Validation |
| **CI/CD** | GitHub Actions, Automated Testing, Code Quality Checks |

---

## 🏛️ Architecture

### Clean Architecture Benefits
- **Separation of Concerns**: Each layer has a single responsibility
- **Dependency Inversion**: Abstractions don't depend on concrete implementations  
- **Testability**: Business logic is framework-independent
- **Maintainability**: Easy to modify and extend features

---

## 🔧 CI/CD Pipeline

### 🔄 Automated Workflows
- **Continuous Integration** - Automated testing and building on every push
- **Quality Assurance** - Code formatting, linting, and type checking
- **Security Auditing** - Weekly dependency vulnerability scans
- **Dependency Management** - Automated dependency updates with PR creation

### GitHub Actions Workflows

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| **CI/CD Pipeline** | Push to `main`/`develop`, PRs | Build, test, and quality checks |
| **Security Audit** | Weekly schedule, Push/PR | Vulnerability scanning |
| **Update Dependencies** | Weekly schedule, Manual | Automated dependency updates |

#### Pipeline Features
- **Parallel Execution** - Server and web builds run simultaneously
- **Caching Strategy** - Optimized build times with dependency caching
- **Artifact Management** - Build artifacts stored for deployment
- **Multi-stage Validation** - Tests, linting, and type checking

---

## 🚀 Getting Started

### Prerequisites
- Node.js v22 or higher
- pnpm v10.8.1 or higher
- MongoDB (local installation or MongoDB Atlas)
- Firebase project with Authentication enabled

### 📥 Installation Guide

#### 1. Clone the repository
```bash
git clone git@github.com:sinanptm/fullstack-clean-auth-template.git
cd fullstack-clean-auth-template
```

#### 2. Install dependencies
```bash
pnpm install
```

#### 3. Environment Configuration
Create `.env` files in both `server/` and `web/` directories with the required environment variables. Refer to the `.env.example` files in each directory for the complete list of required variables.

#### 4. Start Development Servers
```bash
# Start both frontend and backend
pnpm dev

# Or start individually
pnpm --prefix server dev    # Backend: http://localhost:8000
pnpm --prefix web dev       # Frontend: http://localhost:3000
```

---

## 📚 API Documentation

<details>
<summary><strong>🔐 Authentication Endpoints</strong></summary>

| Method | Endpoint | Description | Body |
|--------|----------|-------------|------|
| `POST` | `/api/auth/signup` | User registration | `{ email, password, name }` |
| `POST` | `/api/auth/signin` | Email/password login | `{ email, password }` |
| `POST` | `/api/auth/verify-otp` | Verify OTP code | `{ email, otp }` |
| `POST` | `/api/auth/oauth-2` | OAuth authentication | `{ firebaseToken }` |
| `POST` | `/api/auth/forgot-password` | Request password reset | `{ email }` |
| `POST` | `/api/auth/reset-password` | Reset password with OTP | `{ email, otp, newPassword }` |
| `POST` | `/api/auth/refresh` | Refresh access token | `{ refreshToken }` |
| `POST` | `/api/auth/logout` | User logout | - |

</details>

<details>
<summary><strong>👤 User Endpoints</strong></summary>

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `GET` | `/api/user/profile` | Get user profile | ✅ User |
| `PUT` | `/api/user/profile` | Update user profile | ✅ User |

</details>

<details>
<summary><strong>👑 Admin Endpoints</strong></summary>

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| `POST` | `/api/admin/signin` | Admin login | - |
| `GET` | `/api/admin/users` | List all users | ✅ Admin |
| `GET` | `/api/admin/users/:id` | Get specific user | ✅ Admin |
| `PUT` | `/api/admin/users/:id` | Update user | ✅ Admin |
| `DELETE` | `/api/admin/users/:id` | Delete user | ✅ Admin |
| `GET` | `/api/admin/analytics` | System analytics | ✅ Admin |

</details>

---

<details>
<summary><strong>🔒 Security Features</strong></summary>

### 🔐 Authentication Security
- **JWT Tokens**: Secure access and refresh token implementation
- **HTTP-Only Cookies**: Protection against XSS attacks
- **Password Hashing**: bcrypt with 10 salt rounds
- **OTP Verification**: Time-limited one-time passwords

### 🛡️ Authorization & Access Control
- **Role-Based Access Control (RBAC)**: User and admin roles
- **Protected Routes**: Middleware-based route protection
- **Token Validation**: Server-side Firebase token verification

### 🚫 Attack Prevention
- **Rate Limiting**: Request throttling to prevent abuse
- **CORS Configuration**: Cross-origin request security
- **Input Validation**: Comprehensive Joi schema validation
- **SQL Injection Prevention**: Parameterized database queries

### 🔍 Monitoring & Logging
- **Request Logging**: Detailed API request logging
- **Error Tracking**: Comprehensive error handling
- **Security Headers**: Helmet.js security headers

</details>

---

## 💻 Development

### Available Scripts

#### Root Level
```bash
pnpm dev          # Start both frontend and backend
pnpm format       # Format code using Prettier
pnpm lint         # Lint entire project
```

#### Backend (`server/`)
```bash
pnpm dev          # Start development server with hot reload
pnpm build        # Build for production
pnpm start        # Start production server
pnpm test         # Run test suite
```

#### Frontend (`web/`)
```bash
pnpm dev          # Start Next.js development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Lint frontend code
```

---

## 🚀 Deployment

<details>
<summary><strong>✅ Production Checklist</strong></summary>

- [ ] Environment variables configured for production
- [ ] MongoDB Atlas connection established
- [ ] Firebase production project configured
- [ ] Admin credentials secured
- [ ] CORS origins updated for production domains
- [ ] Rate limiting configured appropriately
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] Monitoring and logging setup
- [ ] Backup strategy implemented

</details>

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### How to Contribute

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Follow** the existing code style and architecture patterns
4. **Add** tests for new functionality
5. **Commit** your changes (`git commit -m 'Add some amazing feature'`)
6. **Push** to the branch (`git push origin feature/amazing-feature`)
7. **Open** a Pull Request

### Development Guidelines

- Follow the clean architecture principles
- Write comprehensive tests for new features
- Update documentation for API changes
- Use TypeScript for type safety
- Follow the existing code formatting standards

### Reporting Issues

If you find a bug or have a feature request, please open an issue with:
- Clear description of the problem
- Steps to reproduce (for bugs)
- Expected vs actual behavior
- System information (OS, Node.js version, etc.)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### What this means:
- ✅ **Commercial Use**: Use this code in commercial projects
- ✅ **Modification**: Modify the code as needed
- ✅ **Distribution**: Share and distribute the code
- ✅ **Private Use**: Use for private projects
- ❗ **License Notice**: Keep the original license notice

---

## 📞 Support

- 📚 **Documentation**: [Full Documentation](https://full-stack-clean-auth-template.vercel.app/)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/sinanptm/fullstack-clean-auth-template/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/sinanptm/fullstack-clean-auth-template/discussions)

---

<div align="center">

### ⭐ Star this repository if it helped you!

[![GitHub stars](https://img.shields.io/github/stars/sinanptm/fullstack-clean-auth-template?style=social)](https://github.com/sinanptm/fullstack-clean-auth-template)

**Built with ❤️ for the developer community**

</div>
