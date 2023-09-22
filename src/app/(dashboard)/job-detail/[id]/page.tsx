import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

import Applicants from "@/components/organisms/Applicants";
import JobDetail from "@/components/organisms/JobDetail";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
//import prisma from "../../../../../lib/prisma";

interface JobDetailPageProps {
    
}

const JobDetailPage: FC<JobDetailPageProps> = async ({ }) => {

    return (
        <div>
            <div className="inline-flex items-center gap-5 mb-5">
                <div>
                    <Link href="/job-listings">
                        <ArrowLeftIcon className="w-9 h-9" />
                    </Link>
                </div>
                <div>
                    <div className="text-2xl font-semibold mb-1">
                        Brand Designer
                    </div>
                    <div>
                        Design . Full-Time . 1/10 Hired
                    </div>
                </div>
            </div>

            <Tabs defaultValue="applicants">
                <TabsList className="mb-8">
                    <TabsTrigger value="applicants">Applicants</TabsTrigger>
                    <TabsTrigger value="jobDetails">Job Details</TabsTrigger>
                </TabsList>
                <TabsContent value="applicants">
                    <Applicants/>
                </TabsContent>
                <TabsContent value="jobDetails">
                    <JobDetail />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default JobDetailPage;