import { useFetch } from "./useFetch";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
	const { data, loading, error } = useFetch(
		"https://jsonplaceholder.typicode.com/users"
	);
	return (
		<div className="App flex flex-col justify-center items-center">
			<div className="flex flex-row">
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img
						src={reactLogo}
						className="logo react"
						alt="React logo"
					/>
				</a>
			</div>
			<h1>REST API CONSUME (Fetch example)</h1>
			<div className="w-full max-w-xl bg-gray-300 p-8 mt-12 rounded">
				<ul className="w-full grid grid-cols-1 gap-x-4 gap-y-4 justify-items-center">
					{error && (
						<li className="p-3 bg-red-500 rounded-md">
							Error: {error}
						</li>
					)}
					{/* TODO:agregar un spinner en el loading */}
					{loading && <li class="line-wobble"></li>}
					{data?.map((user) => (
						<li
							className="w-full max-w-xl flex flex-col justify-center items-center gap-y-3 bg-white shadow-md rounded-md p-5 text-black"
							key="{user.id}"
						>
							<h2 className="text-md font-semibold">
								Full name:
								<span className="font-normal ml-1">{user.name}</span>
							</h2>
							<p className="text-md font-semibold">
								Email:
								<span className="font-normal ml-1">
									{user.email}
								</span>
							</p>
							<p className="text-md font-semibold">
								Phone:
								<span className="font-normal ml-1">
									{user.phone}
								</span>
							</p>
							<p className="text-md font-semibold">
								Website:
								<a
									href={user.website}
									target="_blank"
									className="font-normal ml-1 text-blue-400 underline"
								>
									{user.website}
								</a>
							</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default App;
