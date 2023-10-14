import SortableFilesListWithActions from "../widgets/SortableFilesListWithActions"

export default function FilesListPage() {
  return (
    <>
      <h1 className="font-bold text-3xl">My Files</h1>
      <SortableFilesListWithActions />
    </>
  )
}
