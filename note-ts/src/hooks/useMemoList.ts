import { useCallback, useState } from "react";

//メモ一覧  State
export const useMemoList = () => {
  //メモ一覧
  const [memos, setMemos] = useState<string[]>([]);

  //メモ通知ロジック
  const addTodo = useCallback((text: string) => {
    //State変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    //テキストボックスの入力内容をメモ配列に追加
    newMemos.push(text);
    setMemos(newMemos);
  }, [memos]);

  //メモ削除ロジック
  const deleteTodo = useCallback((index: number) => {
    // state変更を正常に検知させるため新たな配列を生成
    const newMemos = [...memos];
    // メモ配列から該当の要素を削除
    newMemos.splice(index, 1);
    setMemos(newMemos);
  }, [memos]);

  return { memos, addTodo, deleteTodo };
};
