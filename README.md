# Dependency Injection Pattern - Express TypeScript

A practical demonstration of **Dependency Injection (DI)** pattern implementation in a Node.js Express application using TypeScript. This project showcases how to build scalable, testable, and maintainable backend applications by decoupling dependencies and following SOLID principles.

## 🎯 Overview

This project demonstrates the dependency injection pattern through two modules:
- **Health Module**: Shows basic service instantiation within controllers
- **Upload Module**: Demonstrates proper constructor-based dependency injection with interface contracts

## ✨ Key Features

- **TypeScript** - Full type safety with strict mode enabled
- **Dependency Injection** - Loosely coupled architecture for better testability
- **Environment Validation** - Runtime environment variable validation using Zod
- **Modular Architecture** - Clean separation of concerns (routes, controllers, services)
- **Express 5.x** - Latest Express framework with enhanced features
- **Development Hot-Reload** - Fast development with tsx watch mode

## 📁 Project Structure

```
deps-injection/
├── src/
│   ├── app.ts                      # Express app configuration
│   ├── server.ts                   # Server initialization
│   ├── config/
│   │   └── config.ts               # Environment config with Zod validation
│   └── modules/
│       ├── index.ts                # Module exports
│       ├── health/                 # Health check module
│       │   ├── health.controller.ts
│       │   ├── health.routes.ts
│       │   └── health.service.ts
│       └── upload/                 # File upload module (DI example)
│           ├── upload.controller.ts
│           ├── upload.routes.ts
│           ├── upload.service.ts
│           └── utils/
│               └── cloudinary.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sraveshnandan/deps-injection.git
   ```

2. Navigate to the project directory:
   ```bash
   cd deps-injection
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create environment files:
   
   **For Development (.env.dev):**
   ```env
   PORT=3000
   NODE_ENV=development
   ```
   
   **For Production (.env.prod):**
   ```env
   PORT=8080
   NODE_ENV=production
   ```

### Running the Application

Start the development server with hot-reload:
```bash
npm run dev
```

The server will start on the configured PORT (default: 3000).

## 📚 API Endpoints

### Root Endpoint
```http
GET /
```
Returns a simple "Hello, World!" message.

### Health Check
```http
GET /api/v1/health
```
Returns system health information including uptime and hostname.

**Response:**
```json
{
  "uptime": 12345.67,
  "name": "hostname"
}
```

### File Upload
```http
POST /api/v1/upload
```
Handles file upload operations (service logic to be implemented).

**Response (Success):**
```json
{
  "message": "File uploaded successfully",
  "data": {
    "filename": "example.jpg",
    "status": "uploaded"
  }
}
```

**Response (Error):**
```json
{
  "message": "File upload failed",
  "error": "..."
}
```

## 🏗️ Architecture & Design Patterns

### Dependency Injection Implementation

This project demonstrates two approaches to dependency management:

#### 1. **Direct Instantiation** (Health Module)
```typescript
// health.controller.ts
const authService = new AuthService(true);
const healthInfo = authService.getHealth();
```
Simple approach suitable for basic services without complex dependencies.

#### 2. **Constructor Injection** (Upload Module)
```typescript
// upload.controller.ts
export class UploadController {
    constructor(private uploadservice: UploadService) {}
    
    uploadFile = async(req: Request, res: Response) => {
        const result = await this.uploadservice.upload(req);
        // ...
    }
}

// upload.routes.ts
const uploadservice = new UploadService("uploaderDependency");
const uploaderController = new UploadController(uploadservice);
```
**Benefits:**
- Better testability (can inject mock services)
- Loose coupling between controller and service
- Easier to swap implementations
- Follows dependency inversion principle

### Interface-Based Programming

The Upload module uses interface contracts:
```typescript
interface UploadService {
    upload(file: any): Promise<any>;
}
```
This allows for multiple implementations without changing the controller.

### Module Pattern

Each feature is organized as a self-contained module with:
- **Routes**: Define API endpoints
- **Controllers**: Handle HTTP requests/responses
- **Services**: Contain business logic
- **Utils**: Shared utilities and helpers

## ⚙️ Configuration

### Environment Validation

The project uses **Zod** for runtime environment variable validation:

```typescript
const envSchema = z.object({
  PORT: z.string().min(2),
  NODE_ENV: z.string().min(3),
});
```

This ensures that:
- Required environment variables are present
- Values meet validation criteria
- Application fails fast with clear error messages if config is invalid

### TypeScript Configuration

The project uses strict TypeScript settings:
- Strict mode enabled
- No unchecked indexed access
- Latest ESNext features
- Bundler module resolution

## 🧪 Testing

The dependency injection pattern makes this codebase highly testable. Example test structure:

```typescript
// Example: Testing upload controller with mock service
const mockUploadService = {
    upload: jest.fn().mockResolvedValue({ status: 'success' })
};

const controller = new UploadController(mockUploadService);
// Test controller methods with mocked dependencies
```

## 📦 Dependencies

### Core Dependencies
- **express** (^5.2.1) - Web framework
- **dotenv** (^17.2.3) - Environment variable management
- **zod** (^4.3.6) - Schema validation

### Development Dependencies
- **typescript** (^5) - Static typing
- **tsx** (^4.21.0) - TypeScript execution and watch mode
- **@types/express** - TypeScript definitions for Express
- **@types/node** - TypeScript definitions for Node.js

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot-reload (uses tsx)

### Code Organization Best Practices

1. **Separation of Concerns**: Keep routes, controllers, and services separate
2. **Single Responsibility**: Each class/function has one clear purpose
3. **Dependency Injection**: Inject dependencies through constructors
4. **Interface Contracts**: Define clear interfaces for services
5. **Type Safety**: Leverage TypeScript's type system fully
6. **Environment Validation**: Validate configuration at startup

## 🔄 Future Enhancements

Potential improvements to demonstrate more DI patterns:

- [ ] Implement a DI container (e.g., InversifyJS, TSyringe)
- [ ] Add middleware injection
- [ ] Create repository pattern with database abstraction
- [ ] Add unit and integration tests
- [ ] Implement logger service injection
- [ ] Add authentication/authorization middleware
- [ ] Complete Cloudinary integration for upload service
- [ ] Add request validation middleware

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Sravesh Nandan**

- GitHub: [@sraveshnandan](https://github.com/sraveshnandan)

## 🙏 Acknowledgments

This project serves as an educational resource for understanding dependency injection patterns in TypeScript/Node.js applications. It's designed to help developers learn best practices for building maintainable and testable backend applications.
