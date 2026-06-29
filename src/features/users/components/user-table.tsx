"use client";

import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { columns } from "./columns";
import { User } from "../types";

type Props = {
  users: User[];
};

export default function UserTable({ users }: Props) {
  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {/* Desktop */}
      <div className="hidden overflow-hidden rounded-2xl border bg-white shadow-sm lg:block">
        <Table>
          <TableHeader className="bg-slate-50">
            {table.getHeaderGroups().map((group) => (
              <TableRow key={group.id}>
                {group.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    className="h-12 font-semibold text-slate-600"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="transition-colors hover:bg-slate-50"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="py-4"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-40 text-center"
                >
                  <div className="space-y-2">
                    <p className="font-medium">
                      No users found
                    </p>

                    <p className="text-sm text-slate-500">
                      Try changing the search or filters.
                    </p>
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Mobile */}
      <div className="space-y-4 lg:hidden">
        {users.length ? (
          users.map((user) => (
            <div
              key={user.id}
              className="rounded-2xl border bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {user.name}
                  </h3>

                  <p className="text-sm text-slate-500">
                    {user.email}
                  </p>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Role</p>
                  <p className="font-medium">{user.role}</p>
                </div>

                <div>
                  <p className="text-slate-500">Store</p>
                  <p className="font-medium">{user.store}</p>
                </div>

                <div>
                  <p className="text-slate-500">Phone</p>
                  <p>{user.phone}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-2xl border bg-white p-10 text-center">
            <p className="font-medium">
              No users found
            </p>

            <p className="mt-1 text-sm text-slate-500">
              Try changing the search.
            </p>
          </div>
        )}
      </div>
    </>
  );
}