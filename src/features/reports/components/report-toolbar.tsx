"use client";

import { CalendarDays, Download } from "lucide-react";

import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ReportToolbar() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border bg-white p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-col gap-3 lg:flex-row">
        <Select defaultValue="6months">
          <SelectTrigger className="w-full lg:w-52">
            <CalendarDays className="mr-2 h-4 w-4" />

            <SelectValue />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="7days">
              Last 7 Days
            </SelectItem>

            <SelectItem value="30days">
              Last 30 Days
            </SelectItem>

            <SelectItem value="3months">
              Last 3 Months
            </SelectItem>

            <SelectItem value="6months">
              Last 6 Months
            </SelectItem>

            <SelectItem value="1year">
              Last 1 Year
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-52">
            <SelectValue placeholder="Branch" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Branches
            </SelectItem>

            <SelectItem value="Head Office">
              Head Office
            </SelectItem>

            <SelectItem value="Gandhi Nagar">
              Gandhi Nagar
            </SelectItem>

            <SelectItem value="Janipur">
              Janipur
            </SelectItem>

            <SelectItem value="Kathua">
              Kathua
            </SelectItem>

            <SelectItem value="Akhnoor">
              Akhnoor
            </SelectItem>

            <SelectItem value="Udhampur">
              Udhampur
            </SelectItem>

            <SelectItem value="Lakhdta Bazaar">
              Lakhdta Bazaar
            </SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="w-full lg:w-52">
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">
              All Categories
            </SelectItem>

            <SelectItem value="Pantry">
              Pantry
            </SelectItem>

            <SelectItem value="Housekeeping">
              Housekeeping
            </SelectItem>

            <SelectItem value="Office">
              Office
            </SelectItem>

            <SelectItem value="Packaging">
              Packaging
            </SelectItem>

            <SelectItem value="Electrical">
              Electrical
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button>
        <Download className="mr-2 h-4 w-4" />
        Export Report
      </Button>
    </div>
  );
}