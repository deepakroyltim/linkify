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
        `${import.meta.env.VITE_API_URL}/links/user/${user.id}/`,
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
        `${import.meta.env.VITE_API_URL}/links/delete/${linkId}`,
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
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold">My Dashboard</h1>
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
            <div className="flex flex-col items-center justify-center py-12 sm:py-16 bg-gray-50 dark:bg-gray-800 rounded-2xl text-center">
              <h3 className="text-lg sm:text-xl font-semibold mb-4">No links yet</h3>
              <p className="text-gray-600 mb-6 px-4">
                Start creating shortened links to see them here
              </p>
              <Button color="primary" as={RouterLink} to="/#form-section">
                Create Your First Link
              </Button>
            </div>
          ) : (
            <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <Table aria-label="Links table" className="min-w-full">
                  <TableHeader>
                    <TableColumn className="hidden sm:table-cell">SL</TableColumn>
                    <TableColumn>TYPE</TableColumn>
                    <TableColumn>URL</TableColumn>
                    <TableColumn className="hidden md:table-cell">CREATED</TableColumn>
                    <TableColumn className="hidden sm:table-cell">CLICKS</TableColumn>
                    <TableColumn>ACTIONS</TableColumn>
                  </TableHeader>
                <TableBody>
                  {links.map((link, index) => (
                    <TableRow key={link._id}>
                      <TableCell className="hidden sm:table-cell">{index + 1}</TableCell>
                      <TableCell>
                        <span className="text-xs sm:text-sm">
                          {link.type == "shortCode" ? "URL" : "QR"}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="max-w-[120px] sm:max-w-xs truncate text-gray-600 text-xs sm:text-sm">
                          {link.originalUrl}
                        </div>
                      </TableCell>
                      <TableCell className="hidden md:table-cell">
                        <span className="text-sm text-gray-500">
                          {new Date(link.createdAt).toLocaleDateString()}
                        </span>
                      </TableCell>
                      <TableCell className="hidden sm:table-cell">
                        <span className="font-medium text-sm">{link.clicks || 0}</span>
                      </TableCell>
                      <TableCell>
                        <div className="flex justify-start gap-1">
                          {link.type == "qrCode" ? (
                            <Button
                              variant="light"
                              size="sm"
                              isIconOnly
                              onPress={() => downloadQRCode(link.shortCode)}
                            >
                              <BsDownload className="w-4 h-4" />
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              variant="light"
                              isIconOnly
                              onPress={() =>
                                copyLink(
                                  `${import.meta.env.VITE_API_BASE_URL}/${
                                    link.shortCode
                                  }`
                                )
                              }
                            >
                              <BsCopy className="w-4 h-4" />
                            </Button>
                          )}

                          <Button
                            size="sm"
                            variant="light"
                            color="danger"
                            isIconOnly
                            onPress={() => deleteLink(link._id)}
                          >
                            <BsTrash className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
