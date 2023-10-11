import FollowButton from "@/components/Followbutton/FollowButton";
import { prisma } from "@/prisma/lib/route"

export default async function UserDetails({params}) {
  const user = await prisma.user.findUnique({
    where : {
      id : params.id
    }
  })

  const { id, name, age, bio, image } = user ?? {};

  return (
    <div className='max-w-md mx-auto mt-4 text-center space-y-3'>
      <h2 className='text-center font-semibold text-xl'>{name}</h2>
      <img className='w-24 mx-auto aspect-square' src={image} alt={name} />
      <h3>{bio}</h3>
      <p>{age}</p>

      <FollowButton targetUserId={id} />
    </div>
  );
}
