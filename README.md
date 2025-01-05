# Defi-poc-Technical_Test

![Defi-poc-test](https://res.cloudinary.com/deco31416/image/upload/v1734367926/Cover-WebSite00_l4i1rx.png)

[![React](https://img.shields.io/badge/React-18.2.0-blue?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/Material--UI-5.15.14-blue?logo=mui)](https://mui.com/)
[![Ethers.js](https://img.shields.io/badge/Ethers.js-6.3.0-yellow?logo=ethereum)](https://docs.ethers.io/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

## **Project Description**

Defi-poc-test is a proof of concept for developing a decentralized application (DApp) using **React**, **TypeScript**, and **ethers.js** to interact with MetaMask. This project includes wallet connection, network validation, and automatic network switching, supporting **BSC Testnet** and **Gnosis Testnet**.

### **Features**

1. **MetaMask Wallet Connection**:

   - Detects if MetaMask is installed.
   - Requests wallet connection.
   - Validates if the connected network is supported.
   - Automatically switches to the required network or adds it if not configured.

2. **Network Management**:

   - Configuration for BSC Testnet and Gnosis Testnet.
   - Uses `rpcUrl`, `chainId`, icons, and native currency details.

3. **Modular Components**:

   - Wallet Connection (`ConnectWalletButton.tsx`).
   - Network Configuration (`networks.ts`).
   - Navigation (`navigation.tsx`).

4. **Improved UX**:
   - Responsive design using **Material-UI**.
   - Clear visual feedback for the user.

---

## **Prerequisites**

- **Node.js** (v14 or higher).
- **MetaMask** installed as a browser extension.
- **npm** or **yarn** for managing dependencies.

---

## **Installed Dependencies**

### **Main Dependencies**

```bash
npm install react react-dom @mui/material @mui/icons-material ethers
```

### **Development Dependencies**

```bash
npm install typescript @types/react @types/react-dom @types/node react-toastify
```

---

## **Project Structure**

```plaintext
/src
├── components
│   ├── constants
│   │   └── networks.ts          # Supported network configuration
│   ├── ConnectWallet
│   │   └── ConnectWalletButton.tsx # MetaMask connection component
│   ├── navigation
│   │   └── navigation.tsx       # Navigation bar
├── types
│   └── global.d.ts              # Global types for `window.ethereum`
├── utils
│   └── connectWallet.js         # Wallet connection and network validation logic
├── tsconfig.json                # TypeScript configuration
```

---

## **Usage Instructions**

1. Clone this repository:

   ```bash
   git clone https://github.com/your-repo/Defi-poc-test.git
   cd Defi-poc-test
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the application:

   ```bash
   npm start
   ```

4. Open your browser at [http://localhost:3000](http://localhost:3000) and connect MetaMask.

---

## **Flow Diagrams**

### **Flow of Implemented Changes**

```
                            +-------------------------------+
                            |        Project Start          |
                            +-------------------------------+
                                       |
                                       v
+--------------------------------------------+
|    Install Main Dependencies               |
|    - React, Material-UI, ethers, TypeScript|
+--------------------------------------------+
                                       |
                                       v
+----------------------------------------------------+
| Create `networks.ts`                              |
| - Define supported networks                       |
| - Includes: name, icon, chainId, rpcUrl, currency |
+----------------------------------------------------+
                                       |
                                       v
+-----------------------------------------+
| Implement `connectWallet.js`            |
| - MetaMask connection                   |
| - Network validation                    |
| - Automatic switching to required network|
| - Adding network if not configured      |
+-----------------------------------------+
                                       |
                                       v
+-------------------------------------------------+
| Create `ConnectWalletButton.tsx`                |
| - React component for wallet connection         |
| - Selector for supported networks               |
| - Wallet connect/disconnect management          |
+-------------------------------------------------+
                                       |
                                       v
+------------------------------------------------+
| Define Types in `global.d.ts`                  |
| - Add `ethereum` type to `window` object       |
+------------------------------------------------+
                                       |
                                       v
+-----------------------------------------------+
| Update `navigation.tsx`                        |
| - Integrate `ConnectWalletButton` into the     |
|   navigation bar                               |
+-----------------------------------------------+
                                       |
                                       v
+----------------------------------------------------+
| Final Validation:                                  |
| - Detect if MetaMask is installed                 |
| - Check connected network                         |
| - Switch to required network or add it if missing |
| - Clean and responsive interface with Material-UI |
+----------------------------------------------------+
                                       |
                                       v
                            +-------------------+
                            | Project Complete  |
                            +-------------------+
```

---

### Explanation of Each Step

1. Installing Dependencies:
   - Installed necessary libraries for React, Material-UI, ethers.js, TypeScript, and notification handling.

2. Creating networks.ts:
   - Configured supported networks such as BSC Testnet and Gnosis Testnet.
   - Included chainId, rpcUrl, icons, and native currency details.

3. Implementing connectWallet.js:
   - Connected to MetaMask.
   - Validated the current network.
   - Automatically switched to the required network or configured it if not available in MetaMask.

4. Creating ConnectWalletButton.tsx:
   - Created a component to manage wallet connection.
   - Added a supported network selector with automatic switching.
   - Included a button to connect or disconnect the wallet.

5. Defining Types in global.d.ts:
   - Added the ethereum type to the window object to prevent TypeScript errors.

6. Updating navigation.tsx:
   - Integrated the MetaMask connection button (ConnectWalletButton) into the navigation bar.

7. Final Validation:
   - Verified that MetaMask is installed.
   - Checked if the wallet is connected to a supported network.
   - Automatically switched to the correct network or configured it if unavailable.

---

### **MetaMask Connection Flow**

MetaMask Detected:

    If it is not installed, displays an error message.
    If it is installed, requests access to the wallet.

Network Validation:

    Verifies if the connected network is supported.
    If it is not supported, prompts the user to switch to a valid network.

Automatic Network Switching:

    Attempts to switch to the required network.
    If the network is not configured in MetaMask, adds it automatically.

Successful Connection:

    Displays the connected wallet address and provides an option to disconnect 

## Diagram
```
          +-------------------------+
          | Is MetaMask Installed?  |
          +-------------------------+
                    |
          +---------+---------+
          |                   |
         Yes                  No
          |                   |
+------------------+   +---------------------------+
| Is Wallet Connected? | Show error message        |
+------------------+    +---------------------------+
          |
   +------v------+
   | Is Network Supported? |
   +------^------+
          |                   +---------------------------+
          | No                | Show unsupported network  |
          |                   | message                   |
          |                   +---------------------------+
          |
+-----------------------------+
| Is Required Network Connected? |
+-----------------------------+
          |
   +------v------+
   | Attempt to switch network    |
   | using `wallet_switch...`     |
   +------^------+
          |
          |                   +----------------------------+
          | Error             | Attempt to add network     |
          |                   | using `wallet_add...`      |
          |                   +----------------------------+
          |
          +--------------------+
          | Successful Switch   |
          +--------------------+
                    |
          +-------------------+
          | Wallet Connected   |
          | to Correct Network |
          +-------------------+
```

---
## .gitignore configuration

In addition to implementing the capabilities and flows described above, we set up a .gitignore file to ensure that only essential project files are uploaded to the repository. This ensures that sensitive data, local configurations, and dependencies are not included in version control.

---

## **License**

This project has been developed as a proof of concept for technical testing by **[deco31416.com](https://deco31416.com)**.
