import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginBtn() {
	const { data: session } = useSession();
	if (session) {
		return (
			<>
				<span className='mr-1'>session.user.email</span>
				<button className='btn btn-outline' onClick={() => signOut()}>
					登出
				</button>
			</>
		);
	}
	return (
		<button className='btn btn-outline' onClick={() => signIn()}>
			登录
		</button>
	);
}
