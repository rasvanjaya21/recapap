import Head from "next/head";

import {
	HomeIcon,
	CalendarDaysIcon,
	ChartBarIcon,
	PhotoIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";

import { PencilSquareIcon } from "@heroicons/react/24/solid";

import React from "react";

import Link from "next/link";
import WeatherCard from "@components/sidebar/weather";

export default function About() {
	return (
		<>
			<Head>
				<title>Profile Observer</title>
			</Head>
			
			{/* mobile nav-bar */}
			<div className="flex fixed sm:hidden bg-white px-2 bottom-[-0.7px] w-full h-[75px] shadow-[0_0_3px_0_rgba(0,0,0,0.20)] z-[10]">
				<Link href="/" className="navbar-content cursor-pointer">
					<i className="text-[30px] bx bx-home" />
					<span className="pt-0.5 text-xs">
						<b>Beranda</b>
					</span>
				</Link>
				<Link href="/event" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-calendar" />
					<span className="pt-0.5 text-xs">
						<b>Waktu</b>
					</span>
				</Link>
				<Link href="/result" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-bar-chart-square" />
					<span className="pt-0.5 text-xs">
						<b>Hasil</b>
					</span>
				</Link>
				<Link href="/gallery" className="navbar-content cursor-pointer ">
					<i className="text-[30px] bx bx-image-alt" />
					<span className="pt-0.5 text-xs">
						<b>Galeri</b>
					</span>
				</Link>
				<Link href="/about"  className="navbar-content cursor-pointer navbar-active">
					<i className="text-[30px] bx bxs-group bx-tada" />
					<span className="pt-0.5 text-xs">
						<b>Profile</b>
					</span>
				</Link>
			</div>

			{/* desktop nav-bar */}
			<div className="flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
				<div className="hidden fixed sm:flex flex-col top-0 left-0 w-42 h-full bg-white">
					<div className="flex items-center pl-11 h-18 pt-8">
						<div className="text-xl font-bold">
							<div className="opacity-0 sm:opacity-100 fixed sm:relative inline-flex items-end">
								<PencilSquareIcon className="w-10 h-10" />
								{"."}Recapap
							</div>
						</div>
					</div>

					<div className="overflow-y-auto overflow-x-hidden  flex-grow">
						<ul className="flex flex-col py-4 space-y-1">
							<WeatherCard />
							<li className="pt-12 sm:pt-5">
								<Link
									href="/"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<HomeIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Beranda
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/result"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<CalendarDaysIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Waktu
									</span>
								</Link>
							</li>
							<li>
								<Link
									href=""
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<ChartBarIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Hasil
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/gallery"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl  text-gray-600 hover:text-primary hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<PhotoIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Galeri
									</span>
								</Link>
							</li>
							<li>
								<Link
									href="/about"
									className="relative flex flex-row items-center h-11 focus:outline-none rounded-r-xl bg-primary-100 text-primary hover:text-primary hover:bg-primary-100 border-l-4 border-transparent"
								>
									<span className="inline-flex justify-center items-center ml-11">
										<UsersIcon className="w-4 h-4" />
									</span>
									<span className="ml-3 text-sm tracking-wide truncate">
										Profile
									</span>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* data here */}
			<div className="pt-10 sm:pt-0 h-full pl-5 sm:pl-56 pb-28 mr-5 sm:mr-14 bg-white">

				{/* featured */}
			</div>

			{/* beauty-rock */}
			<div className="fixed bottom-0 w-full gradient-bottom"></div>
		</>
	);
}
