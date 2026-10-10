import CompaniesHeader from "./header/header";
import CompaniesToolbar from "./toolbar/toolbar";
import CompaniesTable from "./table/companies-table";
import CompanyDetail from "./detail/company-detail";
import Profile from "./profile/profile";
import NewCompanyDialog from "./new-company/new-company-dialog";
import CommandMenu from "./command-menu/command-menu";

export default function Companies() {
  return (
    <section id="companies" className="flex min-h-0 min-w-0 flex-1 flex-col">
      <div
        role="note"
        className="caption-style flex shrink-0 items-center justify-center gap-2 border-b border-[#5c4a1a] bg-[#3a2e0f] px-4 py-2 text-center font-medium text-[#f7d58a]"
      >
        <span className="rounded-sm bg-[#f7d58a] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-[#3a2e0f]">
          EXAMPLE
        </span>
        Example data, not real 1441 brands or amounts
      </div>
      <CompaniesHeader />
      <CompaniesToolbar />
      <CompaniesTable />
      <CompanyDetail />
      <Profile />
      <NewCompanyDialog />
      <CommandMenu />
    </section>
  );
}
