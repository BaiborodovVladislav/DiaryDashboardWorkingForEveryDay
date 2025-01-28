import React from "react";
import ProfileFrom from "@/components/forms/ProfileForms";
import ProfilePicture from './_components/ProfilePicture'
import { db } from '@/lib/db'
import { currentUser } from '@clerk/nextjs'

const Settings = async () => {

  const authUser = await currentUser()
  if(!authUser) return null

const user = await db.user.findUnique({
      where:{
        clerkId: authUser.id,
      }
    })

    const uploadProfileImage = async (image: string) => {
      "use server"
      const response = await db.user.update({
        where:{
          clerkId: authUser.id,
        },
        data:{
          profileImage: image,
        }
      })
      return response
    }


    const removeProfileImage = async () => {
      "use server"
      const response = await db.user.update({
        where:{
          clerkId: authUser.id,
        },
        data:{
          profileImage: "",
        }
      })
      return response
    }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-6 text-4xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-6">
        <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your user profile information
          </p>
        </div>
        <ProfilePicture 
        onDelete={removeProfileImage}
        userImage={user?.profileImage || ''} 
        onUpload={uploadProfileImage}
        />
	  <ProfileFrom />
      </div>
    </div>
  );
};

export default Settings;
