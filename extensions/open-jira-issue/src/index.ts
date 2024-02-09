import { Clipboard, getSelectedText, open } from "@raycast/api";

export default async function main() {
  const selectedText = await getSelectedText();
  const copiedText = await Clipboard.readText();
  const text = selectedText || copiedText || "";
  const matchingJiraIssue = text.match(/([A-Za-z]+-[0-9]+)/);
  if (!matchingJiraIssue) {
    return;
  }
  const jiraIssue = matchingJiraIssue[0];
  const link = `https://jira.cfdata.org/browse/${jiraIssue}`;
  await open(link);
}
