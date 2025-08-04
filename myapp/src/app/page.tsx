"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Page = () => {
	const { t } = useTranslation();
	const [data, setData] = useState<any>();
	const listenToServer = async () => {
		try {
			const response = await axios.get("/api");
			setData(response.data.message);
		} catch (error) {
			setData("some Error Occured");
		}
	};
	useEffect(() => {
		listenToServer();
	}, []);
	return (
		<div>
			Next: Welcome to App
			<br />
			Node: {data && `${data}🟢`}
		</div>
	);
};

export default Page;
