import { useState } from "react";
import TopTabs from "../components/TopTabs";

type Answer = {
  id: number;
  content: string;
  author: string;
};

type Question = {
  id: number;
  title: string;
  crop: string;
  content: string;
  author: string;
  date: string;
  image?: string;
  answers: Answer[];
};

export default function MentorPage() {
  const [showForm, setShowForm] = useState(false);
  const [openId, setOpenId] = useState<number | null>(null);

  const [title, setTitle] = useState("");
  const [crop, setCrop] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const [answerText, setAnswerText] = useState("");
  const [answerAuthor, setAnswerAuthor] = useState("");

  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      title: "가지가 이상해요",
      crop: "가지",
      content: "가지 표면이 갈색으로 변했어요. 병충해일까요?",
      author: "시크릿쥬쥬",
      date: "2026. 3. 25.",
      image: undefined,
      answers: [
        {
          id: 1,
          content: "사진상으로는 상처나 과숙 가능성도 있어 보여요. 잎 상태도 함께 확인해보면 좋겠습니다.",
          author: "텃밭멘토",
        },
      ],
    },
  ]);

  const handleImageUpload = (file?: File) => {
    if (!file) return;
    setImage(URL.createObjectURL(file));
  };

  const handleSubmitQuestion = () => {
    if (!title || !content) {
      alert("제목과 질문 내용을 입력해주세요.");
      return;
    }

    const newQuestion: Question = {
      id: Date.now(),
      title,
      crop,
      content,
      author: author || "익명",
      date: new Date().toLocaleDateString("ko-KR"),
      image: image || undefined,
      answers: [],
    };

    setQuestions([newQuestion, ...questions]);
    setTitle("");
    setCrop("");
    setContent("");
    setAuthor("");
    setImage(null);
    setShowForm(false);
  };

  const handleAddAnswer = (questionId: number) => {
    if (!answerText) {
      alert("답변 내용을 입력해주세요.");
      return;
    }

    setQuestions((prev) =>
      prev.map((question) =>
        question.id === questionId
          ? {
              ...question,
              answers: [
                ...question.answers,
                {
                  id: Date.now(),
                  content: answerText,
                  author: answerAuthor || "익명 멘토",
                },
              ],
            }
          : question
      )
    );

    setAnswerText("");
    setAnswerAuthor("");
  };

  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <header style={pageHeaderStyle}>
          <div>
            <h1 style={titleStyle}>💡 멘토스팟</h1>
            <p style={subTitleStyle}>
              텃밭 질문을 올리고,
              <br />
              함께 답을 찾아보는 공간입니다.
            </p>
          </div>

          <button onClick={() => setShowForm(!showForm)} style={askButtonStyle}>
            ✏️ 질문하기
          </button>
        </header>

        <TopTabs />

        {showForm && (
          <section style={formCardStyle}>
            <h2 style={formTitleStyle}>질문 작성</h2>

            <label style={labelStyle}>제목</label>
            <input
              style={inputStyle}
              placeholder="예: 가지가 이상해요"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label style={labelStyle}>작물명</label>
            <input
              style={inputStyle}
              placeholder="예: 가지, 상추, 토마토"
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
            />

            <label style={labelStyle}>질문 내용</label>
            <textarea
              style={textareaStyle}
              placeholder="작물 상태, 궁금한 점, 관리 상황 등을 적어주세요."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            <label style={labelStyle}>작성자</label>
            <input
              style={inputStyle}
              placeholder="이름 또는 닉네임"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />

            <label style={labelStyle}>사진 업로드</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files?.[0])}
            />

            {image && (
              <img src={image} alt="질문 사진 미리보기" style={previewImageStyle} />
            )}

            <div style={formButtonRowStyle}>
              <button onClick={() => setShowForm(false)} style={cancelButtonStyle}>
                취소
              </button>
              <button onClick={handleSubmitQuestion} style={submitButtonStyle}>
                등록하기
              </button>
            </div>
          </section>
        )}

        <section style={questionListStyle}>
          {questions.length === 0 ? (
            <div style={emptyStyle}>
              <div style={{ fontSize: 42 }}>🌱</div>
              <p style={emptyTitleStyle}>아직 질문이 없습니다.</p>
              <p style={emptyTextStyle}>텃밭 고민을 올려보세요.</p>
            </div>
          ) : (
            questions.map((question) => (
              <article key={question.id} style={questionCardStyle}>
                <h2 style={questionTitleStyle}>Q. {question.title}</h2>

                <p style={metaStyle}>
                  {question.author} · {question.date}
                </p>

                {question.crop && <p style={cropStyle}>🌿 {question.crop}</p>}

                <p style={questionTextStyle}>{question.content}</p>

                {question.image && (
                  <img src={question.image} alt="질문 첨부 이미지" style={questionImageStyle} />
                )}

                <button
                  onClick={() =>
                    setOpenId(openId === question.id ? null : question.id)
                  }
                  style={answerToggleStyle}
                >
                  💬 답변 ({question.answers.length})
                </button>

                {openId === question.id && (
                  <div style={answerAreaStyle}>
                    {question.answers.length === 0 ? (
                      <p style={emptyTextStyle}>아직 답변이 없습니다.</p>
                    ) : (
                      question.answers.map((answer) => (
                        <div key={answer.id} style={answerItemStyle}>
                          <p style={answerContentStyle}>{answer.content}</p>
                          <p style={answerAuthorStyle}>답변자: {answer.author}</p>
                        </div>
                      ))
                    )}

                    <div style={answerFormStyle}>
                      <input
                        style={inputStyle}
                        placeholder="답변자 이름"
                        value={answerAuthor}
                        onChange={(e) => setAnswerAuthor(e.target.value)}
                      />

                      <textarea
                        style={answerTextareaStyle}
                        placeholder="답변을 입력하세요."
                        value={answerText}
                        onChange={(e) => setAnswerText(e.target.value)}
                      />

                      <button
                        onClick={() => handleAddAnswer(question.id)}
                        style={answerSubmitStyle}
                      >
                        답변 등록
                      </button>
                    </div>
                  </div>
                )}
              </article>
            ))
          )}
        </section>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  background: "#f4f8f1",
};

const contentStyle = {
  maxWidth: 760,
  margin: "0 auto",
  padding: 20,
};

const pageHeaderStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  marginBottom: 16,
};

const titleStyle = {
  margin: 0,
  color: "#1f3d2b",
  fontSize: 28,
  fontWeight: 900,
};

const subTitleStyle = {
  margin: "8px 0 0",
  color: "#5f6f64",
  fontSize: 14,
  lineHeight: 1.5,
};

const askButtonStyle = {
  border: "none",
  background: "#3f8f4f",
  color: "white",
  padding: "12px 16px",
  borderRadius: 14,
  fontWeight: 900,
  cursor: "pointer",
  flexShrink: 0,
};

const formCardStyle = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 22,
  marginBottom: 20,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const formTitleStyle = {
  margin: "0 0 14px",
  color: "#21814d",
  fontSize: 22,
  fontWeight: 900,
};

const labelStyle = {
  display: "block",
  marginTop: 14,
  marginBottom: 6,
  color: "#304b38",
  fontWeight: 800,
  fontSize: 14,
};

const inputStyle = {
  width: "100%",
  padding: 13,
  borderRadius: 14,
  border: "1px solid #d6ddd4",
  boxSizing: "border-box" as const,
  fontSize: 15,
  outline: "none",
};

const textareaStyle = {
  ...inputStyle,
  height: 110,
  resize: "none" as const,
};

const answerTextareaStyle = {
  ...inputStyle,
  height: 80,
  resize: "none" as const,
  marginTop: 10,
};

const previewImageStyle = {
  width: "100%",
  maxHeight: 280,
  objectFit: "cover" as const,
  borderRadius: 16,
  marginTop: 12,
};

const formButtonRowStyle = {
  display: "flex",
  gap: 10,
  marginTop: 18,
};

const cancelButtonStyle = {
  flex: 1,
  padding: 13,
  borderRadius: 14,
  border: "1px solid #d6ddd4",
  background: "#ffffff",
  color: "#5f6f64",
  fontWeight: 800,
  cursor: "pointer",
};

const submitButtonStyle = {
  flex: 1,
  padding: 13,
  borderRadius: 14,
  border: "none",
  background: "#3f8f4f",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

const questionListStyle = {
  display: "grid",
  gap: 16,
};

const questionCardStyle = {
  background: "#ffffff",
  borderRadius: 22,
  padding: 22,
  boxShadow: "0 6px 18px rgba(0,0,0,0.06)",
};

const questionTitleStyle = {
  margin: 0,
  color: "#21814d",
  fontSize: 22,
  fontWeight: 900,
};

const metaStyle = {
  margin: "8px 0 14px",
  color: "#8a958c",
  fontSize: 13,
};

const cropStyle = {
  display: "inline-block",
  margin: "0 0 12px",
  padding: "6px 10px",
  background: "#e8f5e9",
  color: "#2f6f44",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 800,
};

const questionTextStyle = {
  margin: "0 0 14px",
  color: "#405143",
  lineHeight: 1.6,
};

const questionImageStyle = {
  width: "100%",
  maxHeight: 360,
  objectFit: "cover" as const,
  borderRadius: 16,
  marginBottom: 14,
};

const answerToggleStyle = {
  border: "none",
  background: "#f1f5ef",
  color: "#304b38",
  padding: "10px 13px",
  borderRadius: 12,
  fontWeight: 800,
  cursor: "pointer",
};

const answerAreaStyle = {
  marginTop: 14,
  padding: 14,
  background: "#f8fbf7",
  borderRadius: 16,
};

const answerItemStyle = {
  background: "#ffffff",
  borderRadius: 14,
  padding: 14,
  marginBottom: 10,
  border: "1px solid #e4ece2",
};

const answerContentStyle = {
  margin: 0,
  color: "#405143",
  lineHeight: 1.6,
};

const answerAuthorStyle = {
  margin: "8px 0 0",
  color: "#8a958c",
  fontSize: 13,
};

const answerFormStyle = {
  marginTop: 12,
};

const answerSubmitStyle = {
  width: "100%",
  marginTop: 10,
  padding: 12,
  borderRadius: 14,
  border: "none",
  background: "#3f8f4f",
  color: "white",
  fontWeight: 900,
  cursor: "pointer",
};

const emptyStyle = {
  textAlign: "center" as const,
  padding: 42,
  background: "#ffffff",
  borderRadius: 22,
  color: "#8a958c",
};

const emptyTitleStyle = {
  margin: "10px 0 4px",
  color: "#7b887e",
  fontSize: 16,
};

const emptyTextStyle = {
  margin: 0,
  color: "#9aa39c",
  fontSize: 14,
};