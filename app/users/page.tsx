"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { trpc } from "@/server/client";

export default function Users() {
  const users = trpc.users.get.useQuery();

  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Orders</CardTitle>
        <CardDescription>Recent orders from your store.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead className="hidden sm:table-cell">Email</TableHead>
              <TableHead className="hidden sm:table-cell">Username</TableHead>
              <TableHead className="hidden md:table-cell">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.data?.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {user.id}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  {user.email}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    {user.username}
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {user.createdAt}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
