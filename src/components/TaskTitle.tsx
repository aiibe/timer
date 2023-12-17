function TaskTitle() {
  return (
    <div className="task">
      <textarea
        title="Rename your task"
        placeholder="Focus on this task"
        autoFocus
        rows={4}
      />
    </div>
  );
}

export default TaskTitle;
