// 'use client';

// import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { db } from '@/lib/db';
// import { currentUser } from '@clerk/nextjs';

// const WorkflowEditor = () => {
//   const router = useRouter();
//   const [authUser, setAuthUser] = useState<{ id: string } | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const user = await currentUser();
//         if (user) {
//           setAuthUser({ id: user.id });
//         } else {
//           router.push('/login');
//         }
//       } catch (error) {
//         console.error('Ошибка при получении пользователя:', error);
//       }
//     };

//     fetchUser();
//   }, [router]);

//   useEffect(() => {
//     const checkWorkflows = async () => {
//       if (!authUser) {
//         return;
//       }

//       try {
        
//         const workflows: { id: string }[] = await db.workflows.findMany({
//           where: { userId: authUser.id },
//           select: { id: true }, 
//         });

//         if (workflows.length > 0) {
//           router.push(`/workflows/${workflows[0].id}`);
//         } else {
          
//           const newWorkflow: { id: string } = await db.workflows.create({
//             data: {
//               userId: authUser.id,
//               name: 'New Workflow',
//               description: '',
//             },
//             select: { id: true }, 
//           });

//           router.push(`/workflows/${newWorkflow.id}`);
//         }
//       } catch (error) {
//         console.error('Ошибка при проверке рабочего процесса:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (authUser) {
//       checkWorkflows();
//     }
//   }, [authUser, router]);

//   if (loading) {
//     return (
      // <div>
//         <h1>Loading...</h1>
//       </div>
//     );
//   }

//   return null; 
// };

// export default WorkflowEditor;
