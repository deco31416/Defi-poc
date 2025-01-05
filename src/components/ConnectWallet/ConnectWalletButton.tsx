import React, { useState } from "react";
import { Button, Typography, Box, Select, MenuItem, Paper } from "@mui/material";
import { connectWallet } from "../../utils/connectWallet";
import { networks } from "../constants/networks";

const ConnectWalletButton: React.FC = () => {
    const [walletAddress, setWalletAddress] = useState<string | null>(null);
    const [currentNetwork, setCurrentNetwork] = useState<string>("0x61");

    const handleConnectWallet = async () => {
        const wallet = await connectWallet();
        if (wallet) {
            setWalletAddress(wallet.address);
        }
    };

    const switchNetwork = async (chainId: string) => {
        try {
            await window.ethereum?.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId }],
            });
            setCurrentNetwork(chainId);
            alert(`Network switched to ${networks[chainId].name}`);
        } catch (error: any) {
            if (error.code === 4902) {
                alert("The network is not configured in MetaMask.");
            } else {
                console.error("Error switching network:", error);
            }
        }
    };

    const handleDisconnect = () => {
        setWalletAddress(null);
    };

    return (
        <Paper
            elevation={3}
            sx={{
                padding: "16px",
                maxWidth: "400px",
                margin: "0 auto",
                borderRadius: "12px",
                backgroundColor: "#f9f9f9",
                textAlign: "center",
            }}
        >
            <Typography
                variant="h6"
                sx={{
                    marginBottom: "16px",
                    fontWeight: "bold",
                    color: "#333",
                }}
            >
                Select Network
            </Typography>
            <Select
                value={currentNetwork}
                onChange={(e) => switchNetwork(e.target.value as string)}
                fullWidth
                sx={{
                    marginBottom: "20px",
                    backgroundColor: "#fff",
                    borderRadius: "8px",
                    "& .MuiSelect-icon": { color: "#555" },
                    "& .MuiOutlinedInput-notchedOutline": { border: "none" },
                }}
            >
                {Object.entries(networks).map(([chainId, { name, icon }]) => (
                    <MenuItem key={chainId} value={chainId}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <img
                                src={icon}
                                alt={name}
                                style={{ width: "24px", height: "24px", marginRight: "8px" }}
                            />
                            {name}
                        </Box>
                    </MenuItem>
                ))}
            </Select>

            {!walletAddress ? (
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleConnectWallet}
                    fullWidth
                    sx={{
                        padding: "12px",
                        fontSize: "16px",
                        borderRadius: "8px",
                        backgroundColor: "#00dbe3",
                        "&:hover": {
                            backgroundColor: "#00b3c4",
                        },
                    }}
                >
                    Connect MetaMask
                </Button>
            ) : (
                <Box>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            marginBottom: "12px",
                            color: "#555",
                            fontWeight: "500",
                            fontSize: "14px",
                        }}
                    >
                        Wallet Connected:{" "}
                        <span style={{ fontWeight: "bold", color: "#333" }}>
                            {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                        </span>
                    </Typography>
                    <Button
                        variant="outlined"
                        color="error"
                        onClick={handleDisconnect}
                        fullWidth
                        sx={{
                            padding: "12px",
                            fontSize: "16px",
                            borderRadius: "8px",
                        }}
                    >
                        Disconnect
                    </Button>
                </Box>
            )}
        </Paper>
    );
};

export default ConnectWalletButton;
