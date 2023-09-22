import { FC } from "react";

import ButtonActionTable from "@/components/organisms/ButtonActionTable";
import { Badge } from "@/components/ui/badge";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { JOB_LISTING_COLUMNS, JOB_LISTING_DATA } from "@/constants";
import { dateFormat } from "@/lib/utils";
import moment from "moment";
import { MoreVertical } from "lucide-react";

interface JobListingsPageProps { }

export const revalidate = 0;


const JobListingsPage: FC<JobListingsPageProps> = async ({ }) => {

	return (
		<div>
			<div className="font-semibold text-3xl">Job Listings</div>

			<div className="mt-10">
				<Table>
					<TableHeader>
						<TableRow>
							{JOB_LISTING_COLUMNS.map(
								(item: string, i: number) => (
									<TableHead key={item + i}>{item}</TableHead>
								)
							)}
							<TableHead>Action</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{JOB_LISTING_DATA.map((item: any, i: number) => (
							<TableRow key={item.roles + i}>
								<TableCell>{item.roles}</TableCell>
								<TableCell><Badge>{item.status}</Badge></TableCell>
								<TableCell>{item.datePosted}</TableCell>
								<TableCell>{item.dueDate}</TableCell>
								<TableCell><Badge variant="outline">{item.jobType}</Badge></TableCell>
								<TableCell>{item.applicants}</TableCell>
								<TableCell>{item.applicants} / {item.needs}</TableCell>
								<TableCell><ButtonActionTable url="/job-detail/1" /></TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
};

export default JobListingsPage;