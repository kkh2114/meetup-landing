import { SCHEDULE } from "@/lib/curriculum";

const COLS = ["시간", "강사", "강의명", "강의 내용", "수강 후 얻는 것", "사전 준비"];

/** 모바일용 — 시간 블록별 스택 카드 (가로 스크롤 없음) */
export function ScheduleMobile() {
  return (
    <div className="space-y-6">
      {SCHEDULE.map((block) => {
        if (block.lunch) {
          return (
            <div
              key={block.time}
              className="rounded-xl border border-line bg-surface/40 px-4 py-3 text-center text-sm text-faint"
            >
              <span className="eng text-gold">{block.time}</span> · 점심 시간
            </div>
          );
        }
        return (
          <div key={block.time}>
            <div className="mb-3 inline-flex rounded-full border border-line bg-surface-2 px-3.5 py-1.5">
              <span className="eng text-sm font-semibold text-gold">
                {block.time}
              </span>
            </div>
            <div className="space-y-2.5">
              {(block.rows ?? []).map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-line bg-base p-4"
                >
                  <span className="inline-block rounded-full bg-surface-2 px-2.5 py-1 text-xs font-bold text-gold">
                    {r.instructor}
                  </span>
                  <p className="mt-2.5 font-semibold text-paper">{r.title}</p>
                  {r.detail && (
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {r.detail}
                    </p>
                  )}
                  {r.gain && r.gain !== "—" && (
                    <p className="mt-2.5 text-sm text-gold">얻는 것 · {r.gain}</p>
                  )}
                  {r.prep && r.prep !== "—" && (
                    <p className="mt-1.5 text-xs text-faint">준비 · {r.prep}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export function ScheduleTable({
  variant = "screen",
}: {
  variant?: "screen" | "print";
}) {
  const print = variant === "print";

  const table = print
    ? "w-full border-collapse text-left text-[10.5px] leading-snug text-black"
    : "w-full border-collapse text-left text-sm";
  const th = print
    ? "border border-[#c7ced8] bg-[#1f3a5f] px-2.5 py-2 font-semibold text-white"
    : "border border-line bg-surface-2 px-4 py-3 font-semibold text-gold whitespace-nowrap";
  const td = print
    ? "border border-[#c7ced8] px-2.5 py-2 align-top"
    : "border border-line px-4 py-3 align-top";
  const timeCell = print
    ? "font-bold whitespace-nowrap text-[#1f3a5f]"
    : "eng font-semibold text-gold whitespace-nowrap";
  const inst = print ? "font-semibold" : "font-semibold text-paper";
  const title = print ? "font-semibold" : "font-semibold text-paper";
  const sub = print ? "text-[#334155]" : "text-muted";
  const gainCls = print ? "text-[#475569]" : "text-gold/90";
  const lunch = print
    ? "border border-[#c7ced8] bg-[#eef2f7] px-2.5 py-2 text-center font-medium text-[#64748b]"
    : "border border-line bg-surface/60 px-4 py-3 text-center text-faint";

  return (
    <table className={table}>
      <colgroup>
        <col style={{ width: print ? "11%" : "10%" }} />
        <col style={{ width: "8%" }} />
        <col style={{ width: "23%" }} />
        <col style={{ width: "22%" }} />
        <col style={{ width: "21%" }} />
        <col style={{ width: print ? "15%" : "16%" }} />
      </colgroup>
      <thead>
        <tr>
          {COLS.map((c) => (
            <th key={c} className={th}>
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {SCHEDULE.map((block) => {
          if (block.lunch) {
            return (
              <tr key={block.time}>
                <td className={`${td} ${timeCell}`}>{block.time}</td>
                <td className={lunch} colSpan={5}>
                  점심 시간
                </td>
              </tr>
            );
          }
          const rows = block.rows ?? [];
          return rows.map((r, idx) => (
            <tr key={`${block.time}-${r.instructor}-${idx}`}>
              {idx === 0 && (
                <td className={`${td} ${timeCell}`} rowSpan={rows.length}>
                  {block.time}
                </td>
              )}
              <td className={`${td} ${inst}`}>{r.instructor}</td>
              <td className={td}>
                <span className={title}>{r.title}</span>
              </td>
              <td className={`${td} ${sub}`}>{r.detail}</td>
              <td className={`${td} ${gainCls}`}>{r.gain}</td>
              <td className={`${td} ${sub}`}>{r.prep}</td>
            </tr>
          ));
        })}
      </tbody>
    </table>
  );
}
