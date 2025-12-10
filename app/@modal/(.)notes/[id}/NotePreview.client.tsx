'use client'
import css from "./NotePreview.module.css"
import Modal from "@/components/Modal/Modal"
import { useRouter } from "next/navigation"
import { useParams } from "next/navigation"
import { useQuery } from "@tanstack/react-query"
import { getSingleNote } from "@/lib/api"




export default function NotePreviewClient() {
    const { id } = useParams<{ id: string }>()
    const router = useRouter()

    const handleCloseModal = () => {
        router.push("/notes/filter/all")
    }

    const { data: note, isLoading, error } = useQuery({
        queryKey: ["note", id],
        queryFn: () => getSingleNote(id),
        refetchOnMount: false,
    })

    if (isLoading) {
        return (<p>Loading,please wait...</p>)
    }
    if (error || !note) {
        return (<p>Something went wrong</p>)
    }

    return (
        <Modal onClose={handleCloseModal}>
            <button className={css.backBtn} onClick={handleCloseModal}>
                Back
            </button>
            <div className={css.container}>
                <div className={css.item}>
                    <div className={css.header}>
                        <h2>{note?.title}</h2>
                    </div>
                    <p className={css.content}>{note?.content}</p>
                    <p className={css.date}>{note?.createdAt}</p>
                </div>
            </div>
        </Modal>
    )
}
