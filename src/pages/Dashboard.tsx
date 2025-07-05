import { useState, useEffect } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Spinner,
  Alert,
  addToast,
} from "@heroui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsCopy, BsDownload, BsTrash } from "react-icons/bs";
import { authService } from "../services/authService";
import Layout from "../components/layout/Layout";

interface LinksProps {
  _id: string;
  originalUrl: string;
  shortCode: string;
  createdAt: string;
  clicks: number;
  type: string;
  userId?: string;
}

const Dashboard = () => {
  const [links, setLinks] = useState<LinksProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchUserLinks();
  }, []);

  const fetchUserLinks = async () => {
    try {
      const user = authService.getCurrentUser();
      if (!user) return;

      const response = await fetch(
        `${import.meta.env.VITE_API_URL_SHORTENER}/user/${user.id}/links`,
        {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setLinks(data.links || []);
      } else {
        setError("Failed to fetch your links");
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Unable to load your links");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const copyLink = async (shortUrl: string) => {
    try {
      await navigator.clipboard.writeText(shortUrl);
      addToast({
        title: "Link copied to clipboard!",
        color: "success",
        timeout: 2000,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
      addToast({
        title: "Failed to copy link",
        color: "danger",
        timeout: 2000,
      });
    }
  };

  const downloadQRCode = (qrCode: string) => {
    if (!qrCode) return;

    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qr-code.png"; // You can customize the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const deleteLink = async (linkId: string) => {
    if (!confirm("Are you sure you want to delete this link?")) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL_SHORTENER}/delete/${linkId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authService.getToken()}`,
          },
        }
      );

      if (response.ok) {
        setLinks(links.filter((link) => link._id !== linkId));
        addToast({
          title: "Link deleted successfully!",
          color: "success",
          timeout: 2000,
        });
      } else {
        addToast({
          title: "Failed to delete link",
          color: "danger",
          timeout: 2000,
        });
      }
    } catch (error) {
      console.log(error);
      addToast({
        title: "Error deleting link",
        color: "danger",
        timeout: 2000,
      });
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex justify-center items-center min-h-screen">
          <Spinner size="lg" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold mb-8">My Dashboard</h1>
            {links.length > 0 && (
              <Button
                color="primary"
                as={RouterLink}
                to="/#form-section"
                size="sm"
              >
                Create New Link
              </Button>
            )}
          </div>

          {error && <Alert color="danger" className="mb-6" title={error} />}

          {links.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4">No links yet</h3>
              <p className="text-gray-600 mb-6">
                Start creating shortened links to see them here
              </p>
              <Button color="primary" as={RouterLink} to="/#form-section">
                Create Your First Link
              </Button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl">
              <Table aria-label="Links table">
                <TableHeader>
                  <TableColumn>SL</TableColumn>
                  <TableColumn>TYPE</TableColumn>
                  <TableColumn>ORIGINAL URL</TableColumn>
                  <TableColumn>CREATED</TableColumn>
                  <TableColumn>CLICKS</TableColumn>
                  <TableColumn>ACTIONS</TableColumn>
                </TableHeader>
                <TableBody>
                  {links.map((link, index) => (
                    <TableRow key={link._id}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>
                        {link.type == "shortCode"
                          ? "URL Short Code"
                          : "QR Code"}
                      </TableCell>
                      <TableCell>
                        <div className="max-w-xs truncate text-gray-600">
                          {link.originalUrl}
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="text-sm text-gray-500">
                          {new Date(link.createdAt).toLocaleDateString()}
                        </span>
                      </TableCell>
                      <TableCell>
                        <span className="font-medium">{link.clicks || 0}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-start">
                          {link.type == "qrCode" ? (
                            <Button
                              variant="light"
                              size="sm"
                              onPress={() => downloadQRCode(link.shortCode)}
                            >
                              <BsDownload className="w-5 h-5" />
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="light"
                              onPress={() =>
                                copyLink(
                                  `${import.meta.env.VITE_API_URL_SHORTENER}/${
                                    link.shortCode
                                  }`
                                )
                              }
                            >
                              <BsCopy className="w-5 h-5" />
                            </Button>
                          )}

                          <Button
                            size="sm"
                            variant="light"
                            color="danger"
                            onPress={() => deleteLink(link._id)}
                          >
                            <BsTrash className="w-5 h-5" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
