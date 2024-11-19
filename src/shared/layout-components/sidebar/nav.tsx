import React from "react";

const DashboardIcon = <i className="bx bx-home side-menu__icon"></i>;
const OverviewIcon = <i className="bx bx-bar-chart-alt-2 side-menu__icon"></i>;
const InvoicesIcon = <i className="bx bx-receipt side-menu__icon"></i>;
const CreateInvoiceIcon = <i className="bx bx-edit side-menu__icon"></i>;
const SettingsIcon = <i className="bx bx-cog side-menu__icon"></i>;
const ProfileIcon = <i className="bx bx-user side-menu__icon"></i>;
const DocumentsIcon = <i className="bx bx-file side-menu__icon"></i>;
const WithdrawBankIcon = <i className="bx bxs-bank side-menu__icon"></i>;
const SupportIcon = <i className="bx bx-help-circle side-menu__icon"></i>;

export const MenuItems = [
  {
    menutitle: "MAIN",
  },
  {
    icon: DashboardIcon,
    title: "Dashboard",
    type: "sub",
    active: false,
    selected: false,
    children: [
      {
        path: "/dashboard/overview",
        title: "Overview",
        type: "link",
        icon: OverviewIcon,
        active: false,
        selected: false,
      },
      {
        path: "/dashboard/invoice-list",
        title: "Invoices",
        type: "link",
        icon: InvoicesIcon,
        active: false,
        selected: false,
      },
      {
        path: "/dashboard/create-invoice",
        title: "Create Invoice",
        type: "link",
        icon: CreateInvoiceIcon,
        active: false,
        selected: false,
      },
      {
        path: "/dashboard/invoice-details",
        title: "invoice Details",
        type: "link",
        icon: CreateInvoiceIcon,
        active: false,
        selected: false,
      },
    ],
  },
  {
    icon: SettingsIcon,
    title: "Settings",
    type: "sub",
    active: false,
    selected: false,
    children: [
      {
        path: "/settings/profile",
        title: "Profile",
        type: "link",
        icon: ProfileIcon,
        active: false,
        selected: false,
      },
      {
        path: "/settings/documents",
        title: "Documents",
        type: "link",
        icon: DocumentsIcon,
        active: false,
        selected: false,
      },
      {
        path: "/settings/withdraw-bank",
        title: "Linked Bank",
        type: "link",
        icon: WithdrawBankIcon,
        active: false,
        selected: false,
      },
    ],
  },
  {
    icon: SupportIcon,
    title: "Support",
    type: "link",
    path: "/support",
    active: false,
    selected: false,
  },
];